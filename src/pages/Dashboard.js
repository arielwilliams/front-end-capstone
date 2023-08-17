// import React from "react";
// import AllLists from "../components/AllLists";

// const Dashboard = ({ list, user, setListData }) => {
//   if (Object.keys(user).length > 0) {
//     return (
//       <div>
//         <h1 className="text-center font-semibold text-5xl m-6">
//           {" "}
//           Welcome to your Dashboard!
//         </h1>
//         <h2 className="text-center font-light">
//           On your Dashboard you can view all the restaurants you want to try and
//           manage your favorites. You can get started by heading to the Search
//           page to add restaurants to your favorites list!
//         </h2>
//         <h2 className="text-left font-bold text-2xl ml-6">
//           {user.given_name}'s Lists
//         </h2>
//         <AllLists list={list} setListData={setListData} />
//       </div>
//     );
//   }
// };

// export default Dashboard;


import React from "react";
import AllLists from "../components/AllLists";

const Dashboard = ({ list, user, setListData }) => {
  if (Object.keys(user).length > 0) {
    return (
      <div className="relative bg-cover bg-no-repeat bg-center min-h-[100vh] py-4 fter:opacity-[.30]" style={{ backgroundImage: `url('/pasta.jpg')` }}>
       <section className="rounded p-4 w-full border-black bg-white">
        <h1 className="text-center font-semibold text-5xl m-6 text-green-900">
          Welcome to your Dashboard!
        </h1>
        <h2 className="text-center font-light text-black">
          On your Dashboard you can view all the restaurants you want to try and
          manage your favorites. You can get started by heading to the Search
          page to add restaurants to your favorites list!
        </h2>
       
  <div className="bg-white rounded p-4">
    <h3 className="font-bold text-2xl ml-6 text-green-900 w-full flex justify-center bg-white rounded p-4">
      {user.given_name}'s Lists
    </h3>
  </div>
 </section >
 <section className="flex justify-center font-bold text-white">
  <div className="text-white"> {/* Apply the desired text color here */}
    <AllLists list={list} setListData={setListData} />
  </div>
</section>
      </div>
    );
  }
};

export default Dashboard;


