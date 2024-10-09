// "use client";
// import React, { useState } from "react";
// import { AlertCircle } from "lucide-react";
// import { gradeToPoints, semesters } from "../../utils/sem_data";

// const CGPACalculator = () => {
//   const [selectedSemesters, setSelectedSemesters] = useState<number[]>([]);
//   const [results, setResults] = useState<{ [key: number]: { gpa: string; credits: number } }>({});
//   const [cgpa, setCGPA] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handleSemesterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const semester = parseInt(event.target.value);
//     if (event.target.checked) {
//       setSelectedSemesters([...selectedSemesters, semester]);
//     } else {
//       setSelectedSemesters(selectedSemesters.filter((sem) => sem !== semester));
//     }
//   };

//   const calculateCGPA = () => {
//     let totalCredits = 0;
//     let totalPoints = 0;
//     const semesterResults: { [key: number]: { gpa: string; credits: number } } = {};
//     let validationFailed = false;  // For checking if grade selection is missing

//     selectedSemesters.forEach((semester) => {
//       let semesterCredits = 0;
//       let semesterPoints = 0;

//       Object.entries(semesters[semester]).forEach(([_, subject]) => {
//         const gradeElement = document.getElementById(`grade-${semester}-${subject.name}`) as HTMLSelectElement;
//         const grade = gradeElement.value;

//         // Validate if a grade has been selected
//         if (grade === "") {
//           validationFailed = true;
//           gradeElement.classList.add("border-red-500"); // Add red border to unselected fields
//         } else {
//           gradeElement.classList.remove("border-red-500");
//           const points = gradeToPoints[grade] * subject.credits;
//           semesterCredits += subject.credits;
//           semesterPoints += points;
//         }
//       });

//       const gpa = semesterPoints / semesterCredits;
//       semesterResults[semester] = { gpa: gpa.toFixed(2), credits: semesterCredits };

//       totalCredits += semesterCredits;
//       totalPoints += semesterPoints;
//     });

//     if (validationFailed) {
//       setError("Please select grades for all subjects.");
//       return;
//     } else {
//       setError(null);  // Clear error message if all validations pass
//     }

//     const calculatedCGPA = totalPoints / totalCredits;
//     setResults(semesterResults);
//     setCGPA(calculatedCGPA.toFixed(2));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       {/* Header with College Logo */}
//       <header className="flex justify-center mb-6">
//         <img
//           src="/static/CAHCET.webp"
//           alt="College Logo"
//           className="h-20 w-auto"
//         />
//       </header>

//       <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-4xl mx-auto">
//             <div>
//             <h1 className="text-2xl font-semibold text-center mb-6  text-gray-700">Department of Information Technology</h1>
//               <h1 className="text-2xl font-semibold text-center mb-6  text-gray-700">CGPA Calculator (Regulation 2021)</h1>
//             </div>
//             <div className="divide-y divide-gray-200">
//               <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <div className="flex flex-wrap gap-4 mb-4">
//                   {Object.keys(semesters).map((semester) => (
//                     <label key={semester} className="inline-flex items-center">
//                       <input
//                         type="checkbox"
//                         value={semester}
//                         onChange={handleSemesterChange}
//                         className="form-checkbox h-5 w-5 text-cyan-600"
//                       />
//                       <span className="ml-2 text-gray-700">Semester {semester}</span>
//                     </label>
//                   ))}
//                 </div>
//                 {selectedSemesters.map((semester) => (
//                   <div key={semester} className="mb-6">
//                     <h2 className="text-xl font-semibold mb-2">Semester {semester}</h2>
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Subject
//                           </th>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Credits
//                           </th>
//                           <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                             Grade
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {Object.entries(semesters[semester]).map(([_, subject]) => (
//                           <tr key={subject.name}>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{subject.name}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{subject.credits}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                               <select
//                                 id={`grade-${semester}-${subject.name}`}
//                                 className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                 defaultValue=""  // Ensure the default value is empty
//                               >
//                                 <option value="">Select Grade</option> {/* Placeholder option */}
//                                 {Object.keys(gradeToPoints).map((grade) => (
//                                   <option key={grade} value={grade}>
//                                     {grade}
//                                   </option>
//                                 ))}
//                               </select>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//                 <button
//                   onClick={calculateCGPA}
//                   className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
//                 >
//                   Calculate CGPA
//                 </button>
//                 {error && (
//                   <div className="mt-4 text-center text-red-500">
//                     <p>{error}</p>
//                   </div>
//                 )}
//               </div>
//               {cgpa && (
//                 <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
//                   <p className="text-center text-2xl text-gray-900">Your CGPA: {cgpa}</p>
//                   <table className="min-w-full divide-y divide-gray-200 mt-4">
//                     <thead className="bg-cyan-100">
//                       <tr>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
//                           Semester
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
//                           GPA
//                         </th>
//                         <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
//                           Credits
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {Object.entries(results).map(([semester, { gpa, credits }]) => (
//                         <tr key={semester}>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">Semester {semester}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{gpa}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">{credits}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CGPACalculator;
"use client";
import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import { gradeToPoints, semesters } from "../../utils/sem_data";

const CGPACalculator = () => {
  const [selectedSemesters, setSelectedSemesters] = useState<number[]>([]);
  const [results, setResults] = useState<{ [key: number]: { gpa: string; credits: number } }>({});
  const [cgpa, setCGPA] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSemesterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const semester = parseInt(event.target.value);
    if (event.target.checked) {
      setSelectedSemesters([...selectedSemesters, semester]);
    } else {
      setSelectedSemesters(selectedSemesters.filter((sem) => sem !== semester));
    }
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;
    const semesterResults: { [key: number]: { gpa: string; credits: number } } = {};
    let validationFailed = false;

    selectedSemesters.forEach((semester) => {
      let semesterCredits = 0;
      let semesterPoints = 0;

      Object.entries(semesters[semester]).forEach(([_, subject]) => {
        const gradeElement = document.getElementById(`grade-${semester}-${subject.name}`) as HTMLSelectElement;
        const grade = gradeElement.value;

        if (grade === "") {
          validationFailed = true;
          gradeElement.classList.add("border-red-500");
        } else {
          gradeElement.classList.remove("border-red-500");
          const points = gradeToPoints[grade] * subject.credits;
          semesterCredits += subject.credits;
          semesterPoints += points;
        }
      });

      const gpa = semesterPoints / semesterCredits;
      semesterResults[semester] = { gpa: gpa.toFixed(2), credits: semesterCredits };

      totalCredits += semesterCredits;
      totalPoints += semesterPoints;
    });

    if (validationFailed) {
      setError("Please select grades for all subjects.");
      return;
    } else {
      setError(null);
    }

    const calculatedCGPA = totalPoints / totalCredits;
    setResults(semesterResults);
    setCGPA(calculatedCGPA.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <header className="flex justify-center mb-6">
        <img
          src="/static/CAHCET.webp"
          alt="College Logo"
          className="h-16 w-auto sm:h-20"
        />
      </header>

      <div className="relative py-3 px-4 sm:max-w-4xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-4xl mx-auto">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-gray-700">Department of Information Technology</h1>
              <h1 className="text-xl sm:text-2xl font-semibold text-center mb-4 sm:mb-6 text-gray-700">CGPA Calculator (Regulation 2021)</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-wrap gap-4 mb-4">
                  {Object.keys(semesters).map((semester) => (
                    <label key={semester} className="inline-flex items-center">
                      <input
                        type="checkbox"
                        value={semester}
                        onChange={handleSemesterChange}
                        className="form-checkbox h-5 w-5 text-cyan-600"
                      />
                      <span className="ml-2 text-gray-700">Semester {semester}</span>
                    </label>
                  ))}
                </div>
                {selectedSemesters.map((semester) => (
                  <div key={semester} className="mb-6">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2">Semester {semester}</h2>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Subject
                            </th>
                            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Credits
                            </th>
                            <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Grade
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {Object.entries(semesters[semester]).map(([_, subject]) => (
                            <tr key={subject.name}>
                              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700">{subject.name}</td>
                              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700">{subject.credits}</td>
                              <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-700">
                                <select
                                  id={`grade-${semester}-${subject.name}`}
                                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-xs sm:text-sm"
                                  defaultValue=""
                                >
                                  <option value="">Select Grade</option>
                                  {Object.keys(gradeToPoints).map((grade) => (
                                    <option key={grade} value={grade}>
                                      {grade}
                                    </option>
                                  ))}
                                </select>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
                <button
                  onClick={calculateCGPA}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Calculate CGPA
                </button>
                {error && (
                  <div className="mt-4 text-center text-red-500">
                    <p>{error}</p>
                  </div>
                )}
              </div>
              {cgpa && (
                <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p className="text-center text-xl sm:text-2xl text-gray-900">Your CGPA: {cgpa}</p>
                  <div className="overflow-x-auto mt-4">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-cyan-100">
                        <tr>
                          <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Semester
                          </th>
                          <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                            GPA
                          </th>
                          <th scope="col" className="px-3 sm:px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">
                            Credits
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {Object.entries(results).map(([semester, { gpa, credits }]) => (
                          <tr key={semester}>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-800">Semester {semester}</td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-800">{gpa}</td>
                            <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-xs sm:text-sm font-semibold text-gray-800">{credits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGPACalculator;