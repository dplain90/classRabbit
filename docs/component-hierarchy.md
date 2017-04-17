## Component Hierarchy
## See additional details here: [Component Details]
[Component Details]: https://docs.google.com/document/d/1I4F-1x01JbSVB8LhdtgmwFTTpvm2qM9c7heQevCTMy0/edit?usp=sharing
**App**
 - NavContainer
  + Nav
 - authFormContainer

**authFormContainer**
  - signUp
  - signIn

**Dashboard**
 - searchContainer
 - taskIndexContainer
 - favCategoryIndex
  + favCategory

**tasksIndexContainer**
 - taskIndex
  + taskShow
   * taskDetail

**favCategoryIndex**
 - favCategory

 **SearchResultsContainer**
 - Search
  + searchResult

**newTaskContainer**
 - newTask
  + stage1Container
  + stage2Container
  + stage3Container

**stage1Container**
  - stage1
   - locationFormContainer
    + locationForm
     * searchContainer
   - taskDescriptionContainer
    * taskDescription

**stage2Container**
 - stage2
  + taskerFilter
   * taskersIndexContainer
    * taskersIndex
     * taskerShow

**stage3Container**
 - stage3
  + bookingInfo
  + confirmBooking

**accountContainer**
  - account

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/dashboard" | "DashboardContainer" |
| "/dashboard/newTask/" | "newTaskContainer" |
| "/dashboard/newTask/stage1/" | "stage1Container" |
| "/dashboard/newTask/stage2/" | "stage2Container" |
| "/dashboard/newTask/stage3/" | "stage3Container" |
| "/account/:userId" | "accountContainer" |
