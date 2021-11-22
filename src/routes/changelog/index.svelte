<script lang="ts" context="module">
  export const prerender = true;
  export async function load({ session }) {
    const changelogEntries = session.changelogEntries;
    return { props: { changelogEntries } };
  }
</script>

<script lang="ts">
  import type { ChangelogEntry as ChangelogEntryType } from "../../types/changelog-entry.type";

  import OpenGraph from "../../components/open-graph.svelte";
  import "../../assets/markdown-commons.scss";
  import TwitterFollowButton from "../../components/t-button.svelte";
  import { formatDate, stringToBeautifiedFragment } from "../../utils/helpers";
  import ChangelogDate from "../../components/changelog/changelog-date.svelte";
  import ChangelogLink from "../../components/changelog/changelog-link.svelte";
  import Wrapper from "../../components/changelog/wrapper.svelte";

  export let changelogEntries: ChangelogEntryType[];
</script>

<OpenGraph
  data={{
    description: "New features and improvements to Gitpod.",
    title: "Changelog",
    type: "website",
  }}
/>

<div class="flex">
  <div class="hidden w-4/12 md:block" />
  <header class="w-full mb-x-large md:w-8/12 md:mb-xx-large">
    <h1 class="mt-x-large mb-macro md:mt-xx-large">Changelog</h1>
    <p class="text-large">Gitpod product improvements and updates</p>
    <p class="mt-micro">
      <TwitterFollowButton trackingContext="changelog" class="btn-primary" />
      <a
        href="https://gitpod.io/notifications"
        target="_blank"
        class="btn-secondary"
        >Signup for the Newsletter
      </a>
    </p>
  </header>
</div>

<div class="flex flex-col space-y-x-large md:space-y-xx-large">
  {#each changelogEntries as { date, title, content, image, alt }}
    <div class="flex flex-col md:flex-row">
      <ChangelogDate
        date={formatDate(date)}
        href={`/changelog/${stringToBeautifiedFragment(title)}`}
      />
      <Wrapper class="content-changelog w-full md:w-8/12">
        <img src="/images/changelog/{image}" class="rounded-3xl" {alt} />
        <h2>
          <ChangelogLink
            href={`/changelog/${stringToBeautifiedFragment(title)}`}
          >
            {title}
          </ChangelogLink>
        </h2>
        {@html content}
      </Wrapper>
    </div>
    <div class="border-b border-gray-300" />
  {/each}
</div>
