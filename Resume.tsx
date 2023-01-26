import * as React from "react";

export const Resume: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Aurelian Cozma-Dunareanu - Software Developer</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="stylesheet" href="style.css" />
      </head>

      <body>
        <div id="layout">
          <h1 id="name">Aurelian Cozma-Dunareanu</h1>
          <p id="bio">
			Aurelian is a Software Developer with several years of experience 
			primarily using a Microsoft-based stack where he has developed with 
			a wide range of technologies - database, desktop, web, and mobile. 
			The industries that Aurelian has worked in include gambling, 
			financial-banking, insurance, and market-power.            
          </p>

          <BulletedList
            id="contacts"
            bullets={[
              "Oradea, Romania",
              <Phone countryCode="+40" number="720889398" />,
              {
                label: "aurelian.cozma.dunareanu@gmail.com",
                href: "mailto:aurelian.cozma.dunareanu@gmail.com",
              },
              {
                label: "GitHub",
                href: "https://www.github.com/caurelian85",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/caurelian/",
              },
            ]}
          />

          <Section id="experience" header="Experience">
            <JobSection
              company={{
                name: "Google",
                link: "https://google.com",
              }}
              location="USA"
              position="Senior Frontend Engineer"
              dates={{
                from: "December 2021",
                to: "December 2022",
              }}
              bullets={[
                <>
                  <Link
                    highlight
                    label="Lorem ipsum"
                    href="https://www.lipsum.com/"
                  />{" "}
                  dolor sit amet consectetur adipisicing elit. Libero accusamus
                  quo facere nam iste deserunt quas autem atque dignissimos
                  veniam velit, esse dolores ut praesentium excepturi, magnam
                  eos maxime totam.
                </>,
                [
                  "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
                  "Esse dolores ut praesentium excepturi",
                  [
                    "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
                    "Esse dolores ut praesentium excepturi",
                  ],
                ],
                "Quos inventore deserunt repellendus aliquam expedita quidem odit nobis possimus, assumenda perspiciatis. Beatae nihil dignissimos cum atque ut ratione ad, rerum ipsam quibusdam iusto ea officiis suscipit architecto voluptas corrupti officia.",
              ]}
            />

            <JobSection
              company={{
                name: "Amazon",
                link: "https://amazon.com",
              }}
              location="USA"
              position="Senior Frontend Engineer"
              dates={{
                from: "December 2019",
                to: "December 2020",
              }}
              bullets={[
                "Quos inventore deserunt repellendus aliquam expedita quidem odit nobis possimus, assumenda perspiciatis. Beatae nihil dignissimos cum atque ut ratione ad, rerum ipsam quibusdam iusto ea officiis suscipit architecto voluptas corrupti officia.",
                "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
                "Esse dolores ut praesentium excepturi",
              ]}
            />

            <JobSection
              company={{
                name: "Meta",
                link: "https://meta.com",
              }}
              location="USA"
              position="Frontend Engineer"
              dates={{
                from: "August 2018",
                to: "May 2019",
              }}
              bullets={[
                "Quos inventore deserunt repellendus aliquam expedita quidem odit nobis possimus, assumenda perspiciatis. Beatae nihil dignissimos cum atque ut ratione ad, rerum ipsam quibusdam iusto ea officiis suscipit architecto voluptas corrupti officia.",
                "Libero accusamus quo facere nam iste deserunt quas autem atque dignissimos veniam velit",
                "Esse dolores ut praesentium excepturi",
              ]}
            />

            <JobSection
              company={{
                name: "Netflix",
                link: "https://netflix.com/",
              }}
              location="USA"
              position="Full-stack Engineer"
              dates={{
                from: "August 2015",
                to: "August 2018",
              }}
            />

            <JobSection
              company={{
                name: "Spotify",
                link: "https://spotify.com/",
              }}
              location="USA"
              position="Intern"
              dates={{
                from: "August 2014",
                to: "August 2015",
              }}
            />
          </Section>

          <Section id="education" header="Education">
            <EducationSubsection
              institution={{
                name: "Faculty of Electronics, Telecommunications and Information Technology",
                href: "http://www.electronica.pub.ro/",
              }}
              location="Bucharest, Romania"
              degree="Master's degree"
              faculty="Multimedia technologies for medical applications"
              dates={{
                from: "2012",
                to: "2014/2021",
              }}
            />
            <EducationSubsection
              institution={{
                name: "Faculty of Automatic Control and Computer Engineering",
                href: "https://ac.tuiasi.ro/",
              }}
              location="Iasi, Romania"
              degree="Bachelor's degree"
              faculty="Computer Science and Engineering"
              dates={{
                from: "2004",
                to: "2009",
              }}
            />
          </Section>

          <Section id="skills" header="Skills">
            <BulletedList
              bullets={[
                "ASP.NET, .NET CORE, WCF",
                "C#, C/C++, Python, Java, PL SQL",
                "Entity Framework, ADO.NET, SQL Server",
                "React, Amgular",
                "JavaScript, TypeScript",
                "Express.js, Node.js (CLI apps)",
                "HTML, CSS",
                "OOP, SOLID, Patterns",
                "Developing, Testing, Debugging",
                "CI/CD",
                "Agile, Scrum, Jira",
              ]}
            />
          </Section>

          <Section id="langs" header="Languages">
            <BulletedList bullets={["English", "French", "Romanian"]} />
          </Section>
        </div>
      </body>
    </html>
  );
};

const Section: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}> = ({ header, children, id }) => {
  return (
    <section id={id} className="section">
      <header>{header}</header>
      {children}
    </section>
  );
};

const Subsection: React.FC<{
  header: React.ReactNode;
  children: React.ReactNode;
}> = ({ header, children }) => {
  return (
    <section className="subsection">
      <header>{header}</header>
      {children}
    </section>
  );
};

const JobSection: React.FC<{
  company: { name: React.ReactNode; link: string };
  location: string;
  position: string;
  dates: { from: string; to: string };
  description?: React.ReactNode;
  bullets?: IBullet[];
}> = ({ company, location, position, dates, description, bullets }) => {
  return (
    <Subsection
      header={
        <>
          <Link
            href={company.link}
            label={company.name}
            className="company-name"
          />
          , {location} — {position}
        </>
      }
    >
      <div className="dates">
        {dates.from} - {dates.to}
      </div>
      {description ? <div className="description">{description}</div> : null}
      {bullets ? <BulletedList bullets={bullets} /> : null}
    </Subsection>
  );
};

const EducationSubsection: React.FC<{
  institution: { name: string; href: string };
  location: string;
  degree: string;
  faculty: string;
  dates: { from: string; to: string };
}> = ({ institution, location, faculty, dates, degree }) => {
  return (
    <Subsection
      header={
        <>
          {faculty}, <Link label={institution.name} href={institution.href} />
        </>
      }
    >
      <div style={{ marginTop: "0.3rem" }}>
        {location} — {degree}
      </div>
      <div className="dates">
        {dates.from} - {dates.to}
      </div>
    </Subsection>
  );
};

interface ILink {
  label: React.ReactNode;
  href: string;
  target?: React.HTMLAttributeAnchorTarget;
  className?: string;
  highlight?: boolean;
}
function isLink(x: any): x is ILink {
  return x.label !== undefined;
}
const Link: React.FC<ILink> = ({
  label,
  href,
  className,
  highlight,
  target = "_blank",
}) => {
  const a = (
    <a target={target} href={href} className={className}>
      {label}
    </a>
  );
  return highlight ? <strong>{a}</strong> : a;
};

const Phone: React.FC<{ number: string; countryCode: string }> = ({
  number,
  countryCode,
}) => {
  return (
    <Link
      label={countryCode + " " + number}
      target="_self"
      href={"tel:" + countryCode + number}
    />
  );
};

type IBullet = React.ReactNode | ILink | IBullet[];
const BulletedList: React.FC<{ bullets: IBullet[]; id?: string }> = ({
  bullets,
  id,
}) => {
  return (
    <ul id={id}>
      {bullets.map((x, i) =>
        Array.isArray(x) ? (
          <BulletedList key={i} bullets={x} />
        ) : (
          <li key={i}>{isLink(x) ? <Link {...x} /> : x}</li>
        )
      )}
    </ul>
  );
};
