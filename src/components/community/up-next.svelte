<script lang="ts">
  import Section from "../section.svelte";
  import Modal from "../modal.svelte";
  import Signup from "../signup.svelte";

  let isSignupFormShown: boolean = false;

  const handleClose = () => {
    isSignupFormShown = false;
  };
</script>

<Section class="text-center">
  <h2>Coming up next</h2>
  <div class="max-w-lg mx-auto mt-small">
    <h3 class="h4">Ambassador program</h3>
    <p class="mt-micro mb-x-small text-large">
      Soon we’ll launch a Gitpod ambassdor program. If you are interested in
      joining, sign up now and we’ll get in contact once it’s ready.
    </p>
    <button on:click={() => (isSignupFormShown = true)} class="btn-primary"
      >Sign up</button
    >
  </div>
</Section>

<Modal isOpen={isSignupFormShown} on:close={handleClose}>
  <Signup type="ambassador program" />
</Modal>
