# TODO: Improve About Section

- [x] Uncomment and integrate the profile image into the layout for visual appeal
- [x] Re-enable the Certifications tab in TAB_DATA and add the corresponding TabButton
- [x] Refine the introductory paragraphs for better flow, conciseness, and impact
- [x] Improve layout spacing and responsiveness (adjust CSS classes)

# TODO: Add Contact Section

- [x] Create ContactSection.jsx component with contact form matching AboutSection UI
- [x] Update page.js to import and render ContactSection after CertificateSection
- [x] Verify theme toggling and responsiveness in ContactSection

# TODO: Update Contact Section Inputs

- [x] Change input box backgrounds to black and text to white
- [x] Add maxLength to name input (50)
- [x] Add maxLength to email input (100)
- [x] Add maxLength to message textarea (500)

# TODO: Update Send Message Button and Spacing

- [x] Change button to gradient from primary-400 to secondary-600
- [x] Add spacing between certificate and contact sections

# TODO: Fix Certificate Card Display

- [x] Add space in bg-[#181818]py-6 to bg-[#181818] py-6 in CertificateCard.jsx
- [x] Fix image path for certificate 1 from ../../public/certificates/ to /certificate/
- [x] Fix image paths for certificates 2,4,5,6,10,11 to use /certificate/ instead of GitHub URLs
- [x] Update image paths in CertificationSection.jsx to match actual files in public/certificate/ (e.g., /certificate/learningfullstackdevlopment.jpeg)
- [x] Remove Git and GitHub certificate card (id 7)
- [x] Update SQL certificate (id 8) image path to /certificate/cssbasic.png
- [x] Update Figma certificate (id 9) image path to /certificate/figmabootcamp.png
- [x] Display only 6 certificates initially and add a "Show More" button to display all certificates
