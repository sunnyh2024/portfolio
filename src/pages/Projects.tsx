import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import ProjectCarousel from "../components/ProjectCarousel";
import Layout from "../components/common/Layout";

export default function ProjectPage() {
  const projects = ['1', '2', '3', '4']

  return (
    <Layout title="Projects" showContact={true}>
      <ProjectCarousel projects={projects}/>
    </Layout>
  );
}
