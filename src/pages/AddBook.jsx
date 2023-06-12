// import React from "react";
// import { Button, TextField } from "@mui/material";
// import './AddBook.css'
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useFormik } from "formik";
// function AddBook() {
//     const [file, setFile] = React.useState();

//     function handleChange(e) {
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }

//     const formik=useFormik({
//         initialValues:{
//             name:"",
//             description:"",
//             price:"",
            
//         }
//     })

//     return (
//         <>


//         <Header/>
//             <form>
//                 <div className="ub_mainDiv">
//                     <div className="ub_subDiv1">
//                         <div className="ub_subDiv1-1">
//                             <label>Name:<br />
//                                 <TextField size="small" name="name"></TextField>
//                             </label>
//                         </div>
//                         <div className="ub_subDiv1-2">
//                         <label>Price:<br />
//                                 <TextField size="small" name="price" type="number"></TextField>
//                             </label>
//                         </div>
//                     </div>
//                     <div className="ub_subDiv2">
//                         <div className="ub_subDiv2-1">
//                         <label>Category:<br />
//                                 <TextField size="small" name="category"></TextField>
//                             </label>
//                         </div>
//                         <div className="ub_subDiv2-2">
//                         <label>Image:<br />
//                                 <TextField size="small" name="image" type="file" onChange={handleChange}></TextField>
//                                 {/* <img src={file} /> */}
//                             </label>
//                         </div>
//                     </div>
//                     <div className="ub_subDiv3">
//                     <label>Description:<br />
//                                 <TextField size="small" name="description" ></TextField>
//                         </label>
//                     </div>
//                     <br/>
//                     <Button type="submit" variant="contained" style={{backgroundColor:'green'}}>Save</Button>
//                 </div>
//             </form>
//             <Footer/>
//         </>
//     );
// }
// export default AddBook;



