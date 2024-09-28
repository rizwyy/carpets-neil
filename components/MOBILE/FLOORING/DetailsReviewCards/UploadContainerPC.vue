<template>
  <div class="h-max w-full flex justify-center">
    <div class="h-max w-[100%] bg-white py-[4vh] px-[2vw] rounded-xl">
      <div
        ref="dropArea"
        class="border-2 rounded-md px-[2vw] py-[4rem] border-dotted border-[#999] w-full h-full flex flex-col items-center text-[1.2rem]"
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
      >
        <p class="font-medium mb-[.4rem]">Drop document here</p>
        <p class="font-medium mb-[2rem] text-gray-600">or upload it manually</p>
        <input
          ref="fileInput"
          type="file"
          class="hidden"
          @change="handleFileSelect"
        />
        <button
          @click="triggerFileInput"
          class="bg-[#555] text-white font-medium text-[1.2rem] py-[1.2rem] px-[2vw] rounded-full flex items-center gap-2 hover:bg-[#333]"
        >
          Upload manually
          <Icon icon="tabler:cloud-upload" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";

// Refs for drop area and file input
const dropArea = ref(null);
const fileInput = ref(null);

// Function to handle file drop
const handleDrop = (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    processFiles(files);
  }
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
  const files = event.target.files;
  if (files.length > 0) {
    processFiles(files);
  }
};

// Function to process selected files
const processFiles = (files) => {
  for (const file of files) {
    console.log("Processing file:", file);
    // You can add your file upload logic here
    // For example, upload the file to your server
  }
};
</script>
