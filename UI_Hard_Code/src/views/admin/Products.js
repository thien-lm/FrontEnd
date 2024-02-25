// import {
//     List,
//     Datagrid,
//     TextField,
//     Edit,
//     SimpleForm,
//     EditButton,
//     TextInput,
//     Create,
//     NumberField,
//     ImageField
//   } from 'react-admin'
  
//   export const listCourse = (props) => (
    
//     <List {...props}>
//     <Datagrid>
//     <TextField source="id" label="Course id" />
//       <TextField source="courseName" label="Course Name" />
//       <TextField source="courseDescription" label="Description" />
//       <ImageField source="courseImg" label="Image" />
//       <NumberField source="courseCost" label="Cost" />
//       <NumberField source="courseRating" label="Rating" />
//       <TextField source="createdAt" label="Created At" />
//       <NumberField source="courseTotalStudent" label="Total Students" />
//       <TextField source="lastUpdate" label="Last Updated" />
//       <NumberField source="categoryID" label="Category ID" />
//       <NumberField source="userID" label="User ID" />
//     </Datagrid>
//   </List>
//   )
  
//   export const editCourse = (props) => (
//     <Edit {...props}>
//       <SimpleForm>
//       <TextInput source="courseName" label="Course Name" />
//       <TextInput source="courseDescription" label="Description" />
//       <TextInput source="courseImg" label="Image" />
//       <TextInput source="courseCost" label="Cost" />
//       <TextInput source="courseRating" label="Rating" />
//       <TextInput source="createdAt" label="Created At" />
//       <TextInput source="courseTotalStudent" label="Total Students" />
//       <TextInput source="lastUpdate" label="Last Updated" />
//       <TextInput source="categoryID" label="Category ID" />
//       <TextInput source="userID" label="User ID" />
//       </SimpleForm>
//     </Edit>
//   )
  
//   export const createCourse = (props) => (
//     <Create {...props}>
//       <SimpleForm>
//       <TextInput source="courseName" label="Course Name" />
//       <TextInput source="courseDescription" label="Description" />
//       <TextInput source="courseImg" label="Image" />
//       <TextInput source="courseCost" label="Cost" />
//       <TextInput source="courseRating" label="Rating" />
//       <TextInput source="createdAt" label="Created At" />
//       <TextInput source="courseTotalStudent" label="Total Students" />
//       <TextInput source="lastUpdate" label="Last Updated" />
//       <TextInput source="categoryID" label="Category ID" />
//       <TextInput source="userID" label="User ID" />
//       </SimpleForm>
//     </Create>
//   )