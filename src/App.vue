<script setup>
import Navbar from "./components/Navbar.vue";
import ProfileInformation from "./components/ProfileInformation.vue";
</script>

<template>
    <div class="bg-background min-h-screen font-sans text-white pb-12">
        <Navbar />
        <div class="container pt-12 grid grid-cols-12">
            <ProfileInformation />
        </div>
        <h5 class="mt-10 mb-3 text-center">My Social Media</h5>
        <div class="flex items-center justify-center gap-x-4">
            <div class="rounded-full border border-border p-2 bg-secondary w-11 h-11 flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 35L7.75 28.6666C5.6461 25.6801 4.70445 22.0283 5.10174 18.3968C5.49904 14.7652 7.20798 11.4035 9.90785 8.94248C12.6077 6.48145 16.1129 5.0903 19.7656 5.03011C23.4184 4.96992 26.9675 6.24483 29.747 8.61557C32.5265 10.9863 34.3452 14.2899 34.862 17.9064C35.3787 21.5229 34.5579 25.2036 32.5535 28.2579C30.5492 31.3122 27.4991 33.53 23.9757 34.4951C20.4522 35.4603 16.6977 35.1064 13.4167 33.5L5 35"
                        stroke="#E2E8F0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15 16.6667C15 16.8878 15.0878 17.0997 15.2441 17.256C15.4004 17.4123 15.6123 17.5001 15.8333 17.5001C16.0543 17.5001 16.2663 17.4123 16.4226 17.256C16.5789 17.0997 16.6667 16.8878 16.6667 16.6667V15.0001C16.6667 14.7791 16.5789 14.5671 16.4226 14.4108C16.2663 14.2545 16.0543 14.1667 15.8333 14.1667C15.6123 14.1667 15.4004 14.2545 15.2441 14.4108C15.0878 14.5671 15 14.7791 15 15.0001V16.6667ZM15 16.6667C15 18.8769 15.878 20.9965 17.4408 22.5593C19.0036 24.1221 21.1232 25.0001 23.3333 25.0001H25C25.221 25.0001 25.433 24.9123 25.5893 24.756C25.7455 24.5997 25.8333 24.3878 25.8333 24.1667C25.8333 23.9457 25.7455 23.7338 25.5893 23.5775C25.433 23.4212 25.221 23.3334 25 23.3334H23.3333C23.1123 23.3334 22.9004 23.4212 22.7441 23.5775C22.5878 23.7338 22.5 23.9457 22.5 24.1667C22.5 24.3878 22.5878 24.5997 22.7441 24.756C22.9004 24.9123 23.1123 25.0001 23.3333 25.0001"
                        stroke="#E2E8F0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            <div class="rounded-full border border-border p-2 bg-secondary w-11 h-11 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M26.6667 6.66675H13.3334C9.65152 6.66675 6.66675 9.65152 6.66675 13.3334V26.6667C6.66675 30.3486 9.65152 33.3334 13.3334 33.3334H26.6667C30.3486 33.3334 33.3334 30.3486 33.3334 26.6667V13.3334C33.3334 9.65152 30.3486 6.66675 26.6667 6.66675Z"
                        stroke="#E2E8F0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M20 25C22.7614 25 25 22.7614 25 20C25 17.2386 22.7614 15 20 15C17.2386 15 15 17.2386 15 20C15 22.7614 17.2386 25 20 25Z"
                        stroke="#E2E8F0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M27.5 12.5V12.501"
                        stroke="#E2E8F0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
            <div class="rounded-full border border-border p-2 bg-secondary w-11 h-11 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.6667 31.5372C9.50008 33.8705 9.50008 27.3705 6.66675 26.5372M26.6668 34.8705V29.0372C26.6668 27.3705 26.8334 26.7039 25.8334 25.7039C30.5001 25.2039 35.0001 23.3705 35.0001 15.7039C34.9981 13.7121 34.221 11.7994 32.8334 10.3705C33.4842 8.64047 33.4243 6.72324 32.6668 5.03719C32.6668 5.03719 30.8334 4.53719 26.8334 7.20386C23.4455 6.3215 19.888 6.3215 16.5001 7.20386C12.5001 4.53719 10.6667 5.03719 10.6667 5.03719C9.90922 6.72324 9.8493 8.64047 10.5001 10.3705C9.1125 11.7994 8.33544 13.7121 8.33341 15.7039C8.33341 23.3705 12.8334 25.2039 17.5001 25.7039C16.5001 26.7039 16.5001 27.7039 16.6667 29.0372V34.8705"
                        stroke="#E2E8F0"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>
