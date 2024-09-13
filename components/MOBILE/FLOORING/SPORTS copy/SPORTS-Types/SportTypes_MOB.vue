<script setup>
const { existingUser } = defineProps(["existingUser"]);

// PINIA
const userStore = useUserStore();
// COOKIES
import useUserStore from "~/stores/user";

// Change the spec_1 ref to spec_4, an array for multiple selections
const spec_4 = ref([]);

// Services list for the user to select
const services = [
  "Carpet Installation",
  "Carpet Cleaning",
  "PVC Installation",
  "PVC Polishing",
  "Parquet Installation",
  "Parquet Sanding",
  "Raised Floor Installation",
  "Rubber Floor Installation",
  "Artificial Grass Installation",
  "Skirting Installation",
  "Profile Installation",
  "Self-Leveling",
];

// Clear all selections
function clearAllSelections() {
  spec_4.value = [];
  userStore.preference.spec_4 = [];
}

// Toggle selection for a service
const toggleSelect = (service) => {
  const index = spec_4.value.indexOf(service);

  if (index === -1) {
    // Add to the selection if not already selected
    spec_4.value.push(service);
  } else {
    // Remove from the selection if it's already selected
    spec_4.value.splice(index, 1);
  }

  userStore.preference.spec_4 = toRaw(spec_4.value);
  existingUser ? scrollBy(500) : scrollToBottom();
};

onMounted(() => {});
</script>
<style scoped>
.selected {
  border-radius: 0.375rem;
  border: 2px solid #333;
}
</style>
