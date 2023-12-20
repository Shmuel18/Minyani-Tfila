// import React, { useEffect, useState } from "react";
// import Hebcal from "hebcal";

// const DayTimes = () => {
//   const [times, setTimes] = useState(null);

//   useEffect(() => {
//     // יצירת אובייקט זמנים ליום הנוכחי
//     const currentDate = new Hebcal.HDate();
//     const zmanim = currentDate.getZmanim();

//     setTimes(zmanim);
//   }, []);

//   return (
//     <div>
//       <h2>Zmanim for Today:</h2>
//       {times && (
//         <ul>
//           <li>Sunset: {times.sunset}</li>
//           <li>Sunrise: {times.sunrise}</li>
//           {/* נוסיף עוד זמנים כפי שנדרש */}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default DayTimes;
