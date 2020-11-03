export const validateInput = (element) => {
  if (element.value.trim() === "") {
    return { error: true, errortext: "This field cannot be left blank" };
  }
  //   switch (element.nodename) {
  //     case "INPUT":
  //         if (element.value.trim()===''){
  //             return {error: true,errortext:'This field cannot be left blank'}
  //         }
  //       break;
  //     case "TEXTAREA":
  //         if (element.value.trim()===''){
  //             return {error: true,errortext:'This field cannot be left blank'}
  //         }
  //       break;
  //     default:
  //         if (element.value.trim()===''){
  //             return {error: true,errortext:'This field cannot be left blank'}
  //         }
  //       break;
  //   }
};
