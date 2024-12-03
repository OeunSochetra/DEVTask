<template>
  <div class="flex flex-col gap-4">
    <Title title="Post a job on DevTask" />
    <p>
      Post a job and reach +15,000 qualified professionals directly from our
      newsletters <br />
      <span class="text-blue-600 font-medium">
        and +160,000 from our website. We charge a single fee of $50 for post.
      </span>
    </p>
    <div>
      <div class="border p-10 md:p-16 rounded-lg w-full">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <div class="flex gap-1">
              <label for="jobTitle">Company logo</label>
              <span class="text-red-500">*</span>
            </div>
            <Input
              id="CompanyLogo"
              placeholder="e.g. logo"
              v-model="form.logo"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-1">
              <label for="jobTitle">Company Name</label>
              <span class="text-red-500">*</span>
            </div>
            <Input
              id="companyName"
              placeholder="e.g. Company HH"
              v-model="form.company"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-1">
              <label for="jobTitle">Job title</label>
              <span class="text-red-500">*</span>
            </div>
            <Input
              id="jobTitle"
              placeholder="e.g. Senior iOS Developer"
              v-model="form.jobTitle"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-1">
              <label for="jobLocations">Job locations</label>
              <span class="text-red-500">*</span>
            </div>
            <Input
              id="jobLocations"
              placeholder="e.g. New York, USA"
              v-model="form.locations"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-1">
              <label for="jobType">Job Type</label>
              <span class="text-red-500">*</span>
            </div>
            <Input
              id="jobType"
              placeholder="e.g. Full-time, Part-time, Freelancer..."
              v-model="form.jobType"
            />
          </div>

          <div class="flex flex-col h-96">
            <div class="flex gap-1">
              <label for="jobType">Job description</label>
              <span class="text-red-500">*</span>
            </div>
            <QuillEditor
              id="description"
              class="toolbar rounded-b-md"
              placeholder="e.g. Write a description..."
              ref="quillRef"
              v-model:content="form.description"
              content-type="html"
              theme="snow"
            />
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex gap-1">
              <label for="jobType">Company website</label>
              <span class="text-red-500">*</span>
            </div>
            <Input
              id="companyWebsite"
              placeholder="e.g. https//"
              v-model="form.website"
            />
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex gap-1">
              <label for="jobType">Email</label>
              <span class="text-red-500">*</span>
            </div>
            <Input
              id="email"
              placeholder="e.g. email@domain.com"
              v-model="form.email"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-1">
              <label for="jobType">spotlightOption</label>
              <span class="text-red-500">*</span>
            </div>
            <a-select
              class="!bg-white !border !border-gray-300 !rounded-lg"
              v-model="form.spotlightOption"
              id="spotlightOption"
              placeholder="e.g. spotlight option"
            >
              <a-option
                v-for="(item, index) in spotlightList"
                :key="index"
                :value="item._id"
              >
                {{ item.viewMultiplier }}</a-option
              >
            </a-select>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex gap-1">
              <label for="jobType">Categories</label>
              <span class="text-red-500">*</span>
            </div>
            <a-select
              multiple
              class="!bg-white !border !border-gray-300 !rounded-lg"
              v-model="form.categories"
              id="programLang"
              placeholder="e.g. program language option"
            >
              <a-option
                v-for="(item, index) in programLang"
                :key="index"
                :value="item._id"
              >
                {{ item.name }}
              </a-option>
            </a-select>
          </div>

          <button type="submit">Submit</button>
        </form>
        <!-- <a-form :model="form" @submit="handleSubmit">
          <a-form-item
            label="CompanyLogo"
            field="CompanyLogo"
            :rules="[
              { required: true, message: 'Email is required' },
              {
                type: 'email',
                message: 'Please enter a valid email address',
              },
            ]"
          >
            <div class="flex flex-col items-center">
              <div class="flex gap-1">
                <label for="jobTitle">Company logo</label>
                <span class="text-red-500">*</span>
              </div>
              <Input
                id="CompanyLogo"
                placeholder="e.g. logo"
                v-model="form.logo"
              />
            </div>
          </a-form-item>

          <a-form-item>
            <a-button html-type="submit">Submit</a-button>
          </a-form-item>
        </a-form> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { QuillEditor } from "@vueup/vue-quill";
import Title from "../../components/Title.vue";
import Input from "../../components/Input.vue";
import { onMounted, reactive, ref } from "vue";
import { IFeatureJobPayload } from "../../constants/common";
import { useFeatureJobStore } from "../../store/featureJobStore";
import { useSpotlightStore } from "../../store/spotlightStore";
import { useProgramLangStore } from "../../store/programLnag";
import { storeToRefs } from "pinia";

const spotlightStore = useSpotlightStore();
const programLangStore = useProgramLangStore();
const featureJobStore = useFeatureJobStore();

const { spotlightList } = storeToRefs(spotlightStore);
const { programLang } = storeToRefs(programLangStore);

const { addFeatureJob } = featureJobStore;
const { fetchSpotlightList } = spotlightStore;
const { fetchProgramLang } = programLangStore;

const form = reactive<IFeatureJobPayload>({
  company: "",
  logo: "",
  jobType: "",
  jobTitle: "",
  spotlightOption: "",
  locations: "",
  description: "",
  website: "",
  applyLink: "",
  email: "",
  categories: [],
});
const quillRef = ref();

const handleSubmit = async () => {
  await addFeatureJob(form);
  console.log(form);
  console.log(form.description);
};

// const uploader = async () => {
//   const fileInput = document.querySelector<HTMLInputElement>("#fileInput");
//   const file = fileInput?.files?.[0];

//   if (!file) {
//     console.error("No file selected!");
//     return;
//   }
//   try {
//     const response = await uploadFile<{ id: string }>("media", file);
//     console.log("File uploaded successfully!", response);
//   } catch (error) {
//     console.error("Error uploading file:", error);
//   }
// };

const fetchData = async () => {
  await fetchSpotlightList();
  await fetchProgramLang();
};

onMounted(() => {
  fetchData();
});
</script>
<style scoped>
.toolbar .ql-toolbar .ql-snow {
  @apply !border-none;
}
</style>
