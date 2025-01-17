import Image from "next/image";
import {notFound} from "next/navigation"; // Obsługa niepoprawnych slugów

interface Certificate {
  title: string;
  description: string;
  image: string;
  pages?: string[]; // Optional if some certificates don't have pages
  link: string;
}

// Definicja obiektu certificates z użyciem interfejsu Certificate
const certificateList: Record<string, Certificate> = {
  fullstack: {
    title: "Full Stack Developer",
    description:
      "Kompletny kurs FullStack obejmujący Frontend, Backend i DevOps.",
    image: "/certificates/FullStackP1.png",
    link: "/certificates/fullStack",
  },
  unitTesty: {
    title: "Unit Testy",
    description: "Certyfikat potwierdzający znajomość Testów Jednostkowych",
    image: "/certificates/UnitTesty.png",
    link: "/certificates/unitTesty",
  },
  jira: {
    title: "Jira",
    description:
      "Certyfikat potwierdzający umiejętność zarządzania projektami w JIRA.",
    image: "/certificates/Jira.jpg",
    link: "/certificates/jira",
  },
};
type Params = Promise<{ slug: string[] }>;

const CertificateDetails = async({ params }:{ params: Params }) => {
    const { slug } = await params;
    const certificate = certificateList[slug[0]];
    
    if (!certificate) {
    return notFound(); // Zwróć 404, jeśli slug nie pasuje do żadnego certyfikatu
  }

  return (
    <div>
      <h1>{certificate.title}</h1>
      <p>{certificate.description}</p>
      <Image src={certificate.image} alt={certificate.title} />
    </div>
  );
};

export default CertificateDetails;
