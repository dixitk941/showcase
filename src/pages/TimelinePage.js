import React from 'react';

const TimelinePage = () => {
  const timelineData = [
    { date: '13 Jul, 2024', items: [
      { title: 'Started planning for the 60-day challenge.' },
    ]},
    { date: '17 Jul, 2024', items: [
      { title: 'Set up project repositories and initial structure.' },
    ]},
    { date: '22 Jul, 2024', items: [
      { title: 'Completed the first major feature of GENZ Notes.' },
    ]},
    { date: '25 Jul, 2024', items: [
      { title: 'Updated Hero.jsx in EveSecure: ed6a930, Redeploy of 5ab4b0mvq: 394dbc2' },
    ]},
    { date: '27 Jul, 2024', items: [
      { title: 'Made some improvements: 2299fad, User Authentication: 7c3e33f, Initial setup: 6bfcea4' },
    ]},
    { date: '29 Jul, 2024', items: [
      { title: 'Initialized project using Create React App: c916236' },
    ]},
    { date: '1 Aug, 2024', items: [
      { title: 'Redeployed of 274ew3p9o: 795y010ac' },
    ]},
    { date: '5 Aug, 2024', items: [
      { title: 'Completed updates: 8be5b9d, Hide tokens: bc29f5c, Token updates: bc523a7' },
    ]},
    { date: '8 Aug, 2024', items: [
      { title: 'Deleted auth.js: d49bd3d, Updated RepoDetails.js: 98126d9' },
    ]},
    { date: '10 Aug, 2024', items: [
      { title: 'Fixed minor bugs: 5e19b14, Updated About page: 8a1721d' },
    ]},
    { date: '12 Aug, 2024', items: [
      { title: 'Completed the basic UI for GENZ Connect.' },
      { title: 'Updated TeamPage.jsx: f259de8, Updated Hero.jsx: 818ee9d' },
    ]},
    { date: '14 Aug, 2024', items: [
      { title: 'Updated Header.jsx: 31d43f3, Team upgrade: 102b4ab' },
    ]},
    { date: '16 Aug, 2024', items: [
      { title: 'Completed webpp: a0350a4' },
    ]},
    { date: '18 Aug, 2024', items: [
      { title: 'Added chat and notes section and room: ebd85cc' },
    ]},
    { date: '20 Aug, 2024', items: [
      { title: 'Launched Independence Timeline project.' },
      { title: 'Fixed random bugs: 7473c7d, Updated team section: f7dc3f4' },
    ]},
    { date: '22 Aug, 2024', items: [
      { title: 'Upgraded mentors data: 5d404a7' },
    ]},
    { date: '24 Aug, 2024', items: [
      { title: 'Set up meeting: 8f95189' },
    ]},
    { date: '26 Aug, 2024', items: [
      { title: 'Worked on home page and login/register: ee4156a' },
    ]},
    { date: '28 Aug, 2024', items: [
      { title: 'Updated Firebase setup: c2cfaa8' },
    ]},
    { date: '30 Aug, 2024', items: [
      { title: 'Improved UI for Krishna Janmashtami site.' },
      { title: 'Updated README.md: e275afc, Updated Contact.jsx: c8e2430' },
    ]},
    { date: '1 Sep, 2024', items: [
      { title: 'Created Hero.css: 52348eb' },
    ]},
    { date: '3 Sep, 2024', items: [
      { title: 'Updated Hero.jsx: fec677c' },
    ]},
    { date: '5 Sep, 2024', items: [
      { title: 'Final bug fixes and optimizations: 8c726d9' },
    ]},
    { date: '7 Sep, 2024', items: [
      { title: 'Finalized MentorConnect project.' },
    ]},
    { date: '9 Sep, 2024', items: [
      { title: 'Completed final tweaks and preparations for showcase.' },
    ]},
    { date: '10 Sep, 2024', items: [
      { title: 'Prepared for project showcase with final updates.' },
    ]},
    { date: '11 Sep, 2024', items: [
      { title: 'Successfully showcased all projects and completed the challenge!' },
    ]},
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-12">Timeline</h1>
      <div className="container mx-auto">
        {timelineData.map((event, index) => (
          <div key={index} className="mb-10">
            <div className="ps-2 my-2 first:mt-0">
              <h3 className="text-xs font-medium uppercase text-gray-500">
                {event.date}
              </h3>
            </div>
            {event.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-x-3 mb-8">
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400"></div>
                  </div>
                </div>
                <div className="grow pt-0.5 pb-8">
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
