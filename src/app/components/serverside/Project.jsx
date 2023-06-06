import Link from "next/link";
import googleWebFetch from "@/apis/googleWebFetch";
import { use } from "react";

const ListItem = (props) => {
  console.log(props)
  const title = props.title
  const image = `/${props.image}`
  const description = props.description
  const keywords = props.keywords
  const siteLink = props.siteLink
  const github = props.github
  return (
    <div className="project-list-item">
      <h2 className="project-list-title">{title}</h2>
      <Link href={siteLink} className="project-list-link" target="_blank">
        <img src={image} alt={title}  />
      </Link>
      <p className="project-list-description">{description}</p>
      <p className="project-list-list">{keywords}</p>
      <Link href={github} className="project-list-github" target="_blank">
        <p className="project-list-github">Github</p>
      </Link>
    </div>
  );
};

const Project = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbyIdR8v2zqO6V1D4V1SrGw6DB32-w5s8ZJ_1FizPDx0n5s932Xa7cRABZC6RBDqo7SXKA/exec";
  const data = use(googleWebFetch(url));

  const projects = data.map((project) => {
    return (
      <>
        <ListItem {...project} />
      </>
    );
  });

  return (
    <div className="project">
      <h2 className="projects-title">Porfolio</h2>
      {projects}
    </div>
  );
};

export default Project;
