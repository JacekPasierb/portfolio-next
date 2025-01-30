export interface ContributionData {
  date: string;
  count: number;
  level: number;
}

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

export const fetchGithubContributions = async () => {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME!;
  const endDateS = new Date();
  const startDateS = new Date();
  startDateS.setFullYear(endDateS.getFullYear() - 1);

  const startDate = startDateS.toISOString();
  const endDate = endDateS.toISOString();

  const query = `
    query ($username: String!, $startDate: DateTime!, $endDate: DateTime!) {
      user(login: $username) {
        contributionsCollection(from: $startDate, to: $endDate) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

  const variables = {username, startDate, endDate};

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({query, variables}),
    });

    if (!response.ok) {
      throw new Error("Błąd pobierania danych z GraphQL API");
    }

    const result = await response.json();

    const calendar =
      result?.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar || !calendar.weeks) {
      console.error("❌ Brak danych w odpowiedzi API.");
      return {data: [], totalContributions: 0, activeDays: 0};
    }

    const days =
      calendar.weeks.flatMap((week: Week) => week.contributionDays) || [];

    const formattedData: ContributionData[] = days.map(
      (day: ContributionDay) => ({
        date: day.date,
        count: day.contributionCount,
        level:
          day.contributionCount > 10
            ? 4
            : day.contributionCount > 5
            ? 3
            : day.contributionCount > 2
            ? 2
            : day.contributionCount > 0
            ? 1
            : 0,
      })
    );

    return {
      data: formattedData,
      totalContributions: calendar.totalContributions,
      activeDays: days.length,
    };
  } catch (error) {
    console.error("❌ Błąd pobierania danych z GitHub API:", error);
    return {data: [], totalContributions: 0, activeDays: 0};
  }
};
