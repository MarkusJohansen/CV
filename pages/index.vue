<script setup>
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();

const supabase = createClient(
  config.public.supabase_url,
  config.public.supabase_key
);

const { data: projects } = await supabase.from("project").select("*");
const { data: education } = await supabase.from("education").select("*");
const { data: work } = await supabase.from("work").select("*");
const { data: skills } = await supabase.from("skill").select("*");
</script>

<template>
  <main class="main-wrapper">
    <TopSection />
    <ProjectsList :projects="projects" />
    <EducationList :educationEntries="education" />
    <ExperienceList :experiences="work" />
    <Skills :skills="skills" />
    <Footer />
    <div class="button-wrapper">
      <ToTopButton />
    </div>
  </main>
</template>
