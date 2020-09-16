// import React, { useState, useRef, useEffect } from "react"
// import { CSSTransition } from "react-transition-group"

// import { API_KEY } from "../../../../client/config"

// import { RegisterDescription } from "../../../../client/styles/register/RegisterStyles"
// import {
//   RegisterForm,
//   InputWrapper,
//   LabelHeader,
//   DecorativeBar,
//   GenInputContainer,
//   DotContainer,
//   Dot1,
//   Dot2,
//   Dot3,
// } from "../../../../client/styles/register/SectionStyles"

// let autocomplete
// let autocompleteLisr

// function loadScript(url, callback) {
//   let script = document.createElement("script")
//   script.type = "text/javascript"

//   if (script.readyState) {
//     // For IE < 9
//     script.readyState
//     script.onreadystatechange = function () {
//       if (script.readyStatedocument.readyState === "complete") {
//         script.onreadystatechange = null
//         callback()
//       }
//     }
//   } else {
//     // Every other browser
//     script.onload = () => callback()
//   }

//   script.src = url
//   document.getElementsByTagName("head")[0].appendChild(script)
// }

// function handleScript(setState, elemRef) {
//   autocomplete = new window.google.maps.places.Autocomplete(elemRef.current, {})
//   autocomplete.setFields(["address_components", "fomatted_address"])
//   autocompleteLisr = autocomplete.addListener("place_changed", () =>
//     handleEvent(setState)
//   )
// }

// async function handleEvent(setState) {
//   const places = autocomplete.getPlaces()
//   const query = places.formatted_address
//   setState((prevState) => {
//     return {
//       ...prevState,
//       query: query,
//     }
//   })
// }

// const SectionTwo = ({ desc }) => {
//   const [state, setState] = useState({
//     query: "",
//   })

//   const { query } = state

//   const autoCompleteRef = useRef(null)

//   const handleChange = (event) => {
//     const { name, value } = event.target
//     setState({
//       ...state,
//       [name]: value,
//     })
//   }

//   useEffect(() => {
//     loadScript(
//       `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`,
//       () =>
//         handleScript(setState, autoCompleteRef, {
//           types: ["address"],
//           componentRestrictions: { country: "us" },
//         })
//     )
//     return () => {
//       window.google.maps.event.removeListener(autocompleteLisr)
//       window.google.maps.event.clearInstanceListeners(autocomplete)
//     }
//   }, [])

//   return (
//     <CSSTransition appear={true} in={true} timeout={300} classNames="section">
//       <>
//         <RegisterDescription>{desc}</RegisterDescription>
//         <RegisterForm>
//           <GenInputContainer
//             style={{
//               width: "100%",
//             }}
//           >
//             <LabelHeader>
//               <h4>Your Address</h4>
//               <CSSTransition
//                 appear={true}
//                 in={true}
//                 timeout={600}
//                 classNames="deco"
//               >
//                 <DecorativeBar />
//               </CSSTransition>
//             </LabelHeader>
//             <InputWrapper>
//               <input
//                 ref={autoCompleteRef}
//                 type="text"
//                 name="query"
//                 value={query}
//                 onChange={handleChange}
//                 required
//                 minLength={1}
//               />
//               <label>Enter your address</label>
//               <DotContainer>
//                 <Dot1 />
//                 <Dot2 />
//                 <Dot3 />
//               </DotContainer>
//             </InputWrapper>
//           </GenInputContainer>
//         </RegisterForm>
//       </>
//     </CSSTransition>
//   )
// }

// export default SectionTwo
