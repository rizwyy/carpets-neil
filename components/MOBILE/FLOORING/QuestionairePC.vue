<template>
  <div
    @click.self="closeForm"
    class="h-[110vh] w-screen max-w-[100vw] pb-[10vh] fixed top-0 left-0 flex flex-col items-center justify-center bg-[#000] bg-opacity-[.3] backdrop-blur-[8px] z-[999999] font-outfit"
  >
    <div
      class="h-[36rem] bg-[#ededed] w-[60%] relative rounded-lg flex flex-col overflow-hidden"
    >
      <div
        :style="{ width: `${progressBarWidth}%` }"
        :class="`h-[.5rem]  transition-all ease-in-out duration-300 bg-blue-200 rounded-r-lg`"
      ></div>
      <!-- NAV -->
      <div v-auto-animate class="h-full w-full flex flex-col">
        <div
          class="h-max w-full bg-[#ededed] flex justify-between py-[1rem] px-[2vw]"
        >
          <button
            v-show="currentQuestion > 0"
            @click="currentQuestion === 1 ? closeForm() : decrementQuestion()"
            class="px-[2vw] py-[.4rem] active:scale-[.9] transition-all duration-100 font-[500] font-[500] text-[1.2rem] underline underline-offset-[.2rem] text-[#444]"
          >
            Back
          </button>
          <div class="h-max w-max flex items-center gap-[4vw]">
            <button
              @click="handleQuestionaireConfirmation"
              v-if="currentQuestion === questionnaireList.length"
              class="h-max w-max flex items-center bg-[#333] px-[3.2vw] justify-center gap-[.2vw] py-[.6rem] rounded-md"
            >
              <span class="text-[#f1f1f1]">Done</span>
              <Icon
                class="text-[1.2rem] text-[#f1f1f1]"
                :icon="
                  !isLoading
                    ? 'material-symbols-light:play-arrow-rounded'
                    : 'eos-icons:three-dots-loading'
                "
              />
            </button>

            <button
              v-else
              @click="incrementQuestion"
              class="h-max w-max active:scale-[.9] transition-all duration-100 flex items-center bg-[#333] px-[3.2vw] justify-center gap-[.2vw] py-[.6rem] rounded-md"
            >
              <span class="text-[#f1f1f1]">Next</span>
              <Icon
                class="text-[1.2rem] text-[#f1f1f1]"
                icon="material-symbols-light:play-arrow-rounded"
              />
            </button>
          </div>
        </div>

        <!-- QUESTIONS -->
        <div
          v-if="currentQuestion === 1"
          class="bg-[#ededed] h-full w-full flex flex-col gap-[2rem] items-center justify-between"
        >
          <QuestionaireCard :item="questionnaireList[0]" class="flex-[2]" />
          <div
            class="h-full w-full flex-[3] grid grid-cols-2 pb-[2rem] gap-[2vw] px-[3.2vw]"
          >
            <div
              v-for="(country, index) in countriesWithIcons"
              :key="index"
              @click="toggleCountrySelection(country.name)"
              :class="`h-[5.4rem]  border-[2px] transition-all ease-in-out ${
                selectedCountry === country.name
                  ? ' bg-[#d9d9d9] border-[#333]'
                  : ' bg-inherit border-[#999]'
              } w-full rounded-md flex items-center justify-center relative cursor-pointer`"
            >
              <span>{{ country.name }}</span>
              <Icon
                class="absolute top-[.2rem] right-[.5vw] text-[1.4rem] text-[#444]"
                :icon="
                  selectedCountry === country.name
                    ? 'ph:check-circle'
                    : 'ph:circle'
                "
              />
            </div>
          </div>
        </div>
        <div
          class="bg-[#ededed] h-max w-full flex flex-col gap-[2rem]"
          v-else-if="currentQuestion === 2"
        >
          <QuestionaireCard :item="questionnaireList[1]" class="flex-[2]" />
          <div
            class="h-full w-full flex-[3] grid grid-cols-3 justify-items-stretch gap-[3vw] px-[2vw]"
          >
            <div
              v-for="(flooring, index) in flooringProducts"
              :key="index"
              @click="toggleFlooringSelection(flooring.name)"
              :class="`h-[3.4rem]  border-[2px] transition-all ease-in-out ${
                selectedFloorings.includes(flooring.name)
                  ? ' bg-[#d9d9d9] border-[#333]'
                  : ' bg-inherit border-[#999]'
              } w-full rounded-md flex items-center justify-start pl-[1vw] relative cursor-pointer`"
            >
              <span>{{ flooring.name }}</span>
              <Icon
                class="absolute top-[.2rem] right-[.5vw] text-[1.4rem] text-[#444]"
                :icon="
                  selectedFloorings.includes(flooring.name)
                    ? 'ph:check-circle'
                    : 'ph:circle'
                "
              />
            </div>
          </div>
        </div>
        <div
          class="h-max w-full flex flex-col gap-[2rem]"
          v-else-if="currentQuestion === 3"
        >
          <QuestionaireCard :item="questionnaireList[2]" />
          <div
            class="h-full w-full flex-[3] grid grid-cols-2 justify-items-stretch gap-[3vw] px-[3.2vw]"
          >
            <div
              v-for="(service, index) in flooringServices"
              :key="index"
              @click="toggleServiceSelection(service)"
              :class="`h-[5rem]  border-[2px] transition-all ease-in-out ${
                selectedServices.includes(service)
                  ? ' bg-[#d9d9d9] border-[#333]'
                  : ' bg-inherit border-[#999]'
              } w-full rounded-md flex items-center justify-start pl-[1.4vw] relative cursor-pointer`"
            >
              <span class="text-[1.2rem]">{{ service }}</span>
              <Icon
                class="absolute top-[.2rem] right-[.5vw] text-[1.4rem] text-[#444]"
                :icon="
                  selectedServices.includes(service)
                    ? 'ph:check-circle'
                    : 'ph:circle'
                "
              />
            </div>
          </div>
        </div>
        <div
          v-else-if="currentQuestion === 4"
          class="h-max w-full flex flex-col gap-[2rem]"
        >
          <QuestionaireCard :item="questionnaireList[3]" />
          <div
            class="h-full w-full flex-[3] flex flex-col justify-items-stretch gap-[1.2rem] px-[3.2vw]"
          >
            <div
              v-for="(pos, index) in floorManagerOptions"
              :key="index"
              @click="toggleUserPosition(pos)"
              :class="`h-[5.4rem]  border-[2px] transition-all ease-in-out ${
                userPosition === pos
                  ? ' bg-[#d9d9d9] border-[#333]'
                  : ' bg-inherit border-[#999]'
              } w-full rounded-md flex items-center justify-start pl-[4vw] relative cursor-pointer`"
            >
              <span class="text-[1.2rem]">{{ pos }}</span>
              <Icon
                class="absolute top-[.2rem] right-[.5vw] text-[1.4rem] text-[#444]"
                :icon="userPosition === pos ? 'ph:check-circle' : 'ph:circle'"
              />
            </div>
          </div>
        </div>
        <div
          v-else-if="currentQuestion === 5"
          class="h-max w-full flex flex-col gap-[2rem]"
        >
          <QuestionaireCard :item="questionnaireList[4]" />
          <div
            class="h-full w-full flex-[3] flex flex-col justify-items-stretch gap-[.8rem] px-[3.2vw]"
          >
            <div
              v-for="(status, index) in projectStatusOptions"
              :key="index"
              @click="toggleProjectStatus(status)"
              :class="`h-[5rem] border-[2px] transition-all ease-in-out ${
                projectStatus === status
                  ? ' bg-[#d9d9d9] border-[#333]'
                  : ' bg-inherit border-[#999]'
              } w-full rounded-md flex items-center justify-start pl-[4vw] relative cursor-pointer`"
            >
              <span class="text-[1.2rem]">{{ status }}</span>
              <Icon
                class="absolute top-[.2rem] right-[.5vw] text-[1.4rem] text-[#444]"
                :icon="
                  projectStatus === status ? 'ph:check-circle' : 'ph:circle'
                "
              />
            </div>
          </div>
        </div>
        <div
          v-else-if="currentQuestion === 6"
          class="h-max w-full flex flex-col gap-[2rem]"
        >
          <QuestionaireCard :item="questionnaireList[5]" />
          <div
            class="h-full w-full flex-[3] flex flex-col justify-items-stretch gap-[1rem] px-[3.2vw]"
          >
            <div
              v-for="(frame, index) in timeFrameOptions"
              :key="index"
              @click="toggleTimeFrame(frame)"
              :class="`h-[3.4rem] border-[2px] transition-all ease-in-out ${
                timeFrame === frame
                  ? ' bg-[#d9d9d9] border-[#333]'
                  : ' bg-inherit border-[#999]'
              } w-full rounded-md flex items-center justify-start pl-[4vw] relative cursor-pointer`"
            >
              <span class="text-[1.1rem]">{{ frame }}</span>
              <Icon
                class="absolute top-[.2rem] right-[.5vw] text-[1.4rem] text-[#444]"
                :icon="timeFrame === frame ? 'ph:check-circle' : 'ph:circle'"
              />
            </div>
          </div>
        </div>
        <div
          v-else-if="currentQuestion === 7"
          class="h-max w-full flex flex-col gap-[2rem]"
        >
          <QuestionaireCard :item="questionnaireList[6]" />
          <div
            class="h-full w-full flex flex-col items-center gap-[1rem] justify-center flex-[3] px-[3.2vw]"
          >
            <input
              class="h-[3.2rem] rounded-md bg-inherit px-[2vw] text-[1rem] py-[.8rem] w-[100%] border-[2px] border-[#777]"
              type="number"
              placeholder="ZIP Code"
            />
            <textarea
              v-model="addressIpt"
              placeholder="Your address here"
              class="h-[7rem] rounded-md bg-inherit px-[1vw] text-[1rem] py-[.8rem] w-[100%] border-[2px] border-[#777]"
            />
            <div class="h-max w-full px-[2vw] py-[2rem] flex justify-end">
              <button
                @click="incrementQuestion"
                class="text-[1.2rem] font-[500] flex items-center underline underline-offset-[.4rem]"
              >
                Submit<Icon
                  class="text-[1.8rem] text-[#333]"
                  icon="material-symbols-light:play-arrow-rounded"
                />
              </button>
            </div>
          </div>
        </div>
        <div v-else class="h-max w-full flex flex-col gap-[2rem]">
          <QuestionaireCard :item="questionnaireList[7]" />
          <div
            class="h-full w-full flex flex-col gap-[2rem] items-center justify-center flex-[3] px-[3.2vw]"
          >
            <input
              type="username"
              v-model="nameIpt"
              placeholder="Name"
              class="h-[3.8rem] rounded-md bg-inherit px-[2vw] text-[1rem] py-[.8rem] w-[100%] border-[2px] border-[#777]"
            />
            <input
              type="number"
              v-model="phoneIpt"
              placeholder="Phone"
              class="h-[3.8rem] rounded-md bg-inherit px-[2vw] text-[1rem] py-[.8rem] w-[100%] border-[2px] border-[#777]"
            />
            <div class="h-max w-full px-[2vw] flex justify-end">
              <button
                @click="handleQuestionaireConfirmation"
                class="text-[1.2rem] font-[500] flex items-center underline underline-offset-[.4rem]"
              >
                Submit & Finish<Icon
                  class="text-[1.8rem] text-[#333]"
                  :icon="
                    !isLoading
                      ? 'material-symbols-light:play-arrow-rounded'
                      : 'eos-icons:three-dots-loading'
                  "
                />
              </button>
            </div>
            <div
              class="h-max w-full flex justify-center text-[#999] text-[.8rem] px-[4vw] text-center"
            >
              <!-- <span>
                All rights reserved. <u>Terms and Conditions</u> and
                <u>Privacy Policy</u> | Cookie Preferences Do Not Sell My
                Information</span
              > -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ANSWERS -->
</template>

<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import QuestionaireCard from "./QuestionaireCard.vue";
const currentQuestion = ref(1);
const selectedCountry = ref("");
const selectedFloorings = ref([]);
const selectedServices = ref([]);
const userPosition = ref("");
const projectStatus = ref("");
const timeFrame = ref("");
const addressIpt = ref("");
const nameIpt = ref("");
const phoneIpt = ref("");
const isLoading = ref(false);
const questionnaireList = [
  {
    question: "Which country are you located in?",
    description:
      "Please select your country to help us provide accurate services.",
  },
  {
    question: "Which flooring product are you interested in?",
    description: "Choose from options like Carpets, Gym, Rubber, or Epoxy.",
  },
  {
    question: "What type of flooring service do you require?",
    description:
      "Are you looking for installation, maintenance, or material supply?",
  },
  {
    question: "Are you a homeowner or a contractor?",
    description:
      "Please let us know who will be managing the flooring project.",
  },
  {
    question: "Do you have a tender or job in hand?",
    description:
      "Let us know if this project is already confirmed or still in the bidding phase.",
  },
  {
    question: "What is the time frame for the project?",
    description: "Please indicate the expected start and completion date.",
  },
  {
    question: "What is the address for the flooring project?",
    description: "Provide the site address where the work will take place.",
  },
  {
    question: "Please share your contact details.",
    description: "Enter your phone number and email so we can reach you.",
  },
];

const emit = defineEmits(["close", "success"]);
const closeForm = () => {
  emit("close");
};

// #1
const countriesWithIcons = [
  {
    name: "Bahrain",
  },
  {
    name: "Qatar",
  },
  {
    name: "Kuwait",
  },
  {
    name: "Saudi Arabia",
  },
  {
    name: "UAE",
  },
  {
    name: "Oman",
  },
];
// #2
const flooringProducts = [
  {
    name: "Carpet ",
    description: "Image description",
  },
  {
    name: "Wooden ",
    description: "Image description",
  },
  {
    name: "Vinyl ",
    description: "Image description",
  },

  {
    name: "Raised ",
    description: "Image description",
  },
  {
    name: "Rubber ",
    description: "Image description",
  },
  {
    name: "Grass ",
    description: "Image description",
  },
  {
    name: "Epoxy ",
    description: "Image description",
  },
  {
    name: "Stone ",
    description: "Image description",
  },
];
// #3
const flooringServices = [
  "Installation",
  "Maintenance",
  "Material Supply",
  "Consultation",
  "Repair",
];
// #4
const floorManagerOptions = ["Homeowner", "Contractor"];
// #5
const projectStatusOptions = ["Tender", "Job in Hand", "Still Bidding"];
// #6
const timeFrameOptions = [
  "Immediate",
  "1-3 Months",
  "3-6 Months",
  "More than 6 Months",
];
const progressBarWidth = computed(() => {
  return (
    (currentQuestion.value - 1) *
    (98 / (questionnaireList.length - 1))
  ).toFixed(2);
});

const toggleCountrySelection = (countryName) => {
  selectedCountry.value = countryName;
  setTimeout(() => {
    incrementQuestion();
  }, 800);
};
const toggleUserPosition = (pos) => {
  userPosition.value = pos;
};
const toggleTimeFrame = (frame) => {
  timeFrame.value = frame;
};
const toggleProjectStatus = (project) => {
  projectStatus.value = project;
};
const toggleFlooringSelection = (flooring) => {
  // Check if the country is already selected
  if (selectedFloorings.value.includes(flooring)) {
    // If selected, remove it from the array
    selectedFloorings.value = selectedFloorings.value.filter(
      (country) => country !== flooring
    );
  } else {
    // If not selected, add it to the array
    selectedFloorings.value.push(flooring);
  }
};
const toggleServiceSelection = (service) => {
  // Check if the country is already selected
  if (selectedServices.value.includes(service)) {
    // If selected, remove it from the array
    selectedServices.value = selectedServices.value.filter(
      (country) => country !== service
    );
  } else {
    // If not selected, add it to the array
    selectedServices.value.push(service);
  }
};
function incrementQuestion() {
  if (currentQuestion.value < questionnaireList.length) currentQuestion.value++;
}
function decrementQuestion() {
  if (currentQuestion.value > 1) currentQuestion.value--;
}

function handleQuestionaireConfirmation() {
  isLoading.value = true;
  setTimeout(() => {
    closeForm();
    isLoading.value = false;
    emit("success");
  }, 2000);
}
</script>

<style lang="scss" scoped></style>
