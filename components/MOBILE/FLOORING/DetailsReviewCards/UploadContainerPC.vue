<template>
  <div class="h-max w-full flex justify-center">
    <div class="h-max w-[100%] bg-white py-[4vh] px-[2vw] rounded-xl">
      <div
        ref="dropArea"
        class="border-2 rounded-md px-[2vw] py-[4vh] border-dotted border-[#999] w-full h-full flex flex-col items-center"
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
      >
        <p class="font-medium mb-1">Drop document here</p>
        <p class="font-medium text-sm mb-4 text-gray-600">
          or upload it manually
        </p>
        <input
          ref="fileInput"
          type="file"
          class="hidden"
          @change="handleFileSelect"
        />
        <button
          @click="triggerFileInput"
          class="bg-[#555] text-white font-medium text-sm py-[1.4vh] px-[4vw] rounded-3xl flex items-center gap-2 hover:bg-[#333]"
        >
          Upload manually
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-[2.4vh]"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8c-69 0-113.44 45.79-128 91.2c-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="m320 255.79l-64-64l-64 64m64 192.42V207.79"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
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
