<template>
  <div class="h-max w-full flex justify-center">
    <div class="h-max w-full bg-white py-[0vh] rounded-xl px-[3.2vw]">
      <div
        ref="dropArea"
        class="border-2 border-dotted border-[#999] rounded-md px-[2vw] py-[4.2vh] w-full h-full flex flex-col gap-[1vh] items-center bg-[#ededed]"
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
      >
        <p class="font-medium">Drop document here</p>
        <p class="font-medium text-sm text-gray-600">or</p>
        <input
          ref="fileInput"
          type="file"
          class="hidden"
          @change="handleFileSelect"
        />
        <button
          @click="triggerFileInput"
          class="bg-[#555] text-white font-medium text-[1.6vh] py-[1.2vh] px-[4vw] rounded-3xl flex items-center gap-2 hover:bg-[#333] transition-colors"
        >
          Upload Manually
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Refs for drop area and file input
const dropArea = ref(null);
const fileInput = ref(null);

// Function to handle file drop
const handleDrop = (event) => {
  event.preventDefault();
  processFiles(event.dataTransfer.files);
};

// Function to handle file drag over
const handleDragOver = (event) => {
  event.preventDefault();
};

// Function to trigger the file input click
const triggerFileInput = () => {
  fileInput.value.click();
};

// Function to handle file selection
const handleFileSelect = (event) => {
  processFiles(event.target.files);
};

// Function to process selected files
const processFiles = (files) => {
  if (files.length === 0) return;
  Array.from(files).forEach((file) => {
    console.log("Processing file:", file);
    // Add your file upload logic here
  });
};
</script>

<script></script>

<style scoped>
/* Add any additional styles here if necessary */
</style>
