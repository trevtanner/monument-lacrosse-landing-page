import { prisma } from "@/lib/prisma";

async function main() {
  const date1 = new Date(2026, 0, 4);
  const date2 = new Date(2026, 0, 24);
  const date3 = new Date(2026, 0, 10);

  const date4 = new Date(2026, 0, 6); //Tuesday
  const date5 = new Date(2026, 0, 8); //Thursday
  const date6 = new Date(2026, 0, 11); //Sunday

  const event = await prisma.event.createMany({
    data: [
      {
        title: "Bolts 2026 Summer Tryouts",
        age: "Boys and Girls Youth + HS",
        date: date1,
        team: "Bolts Lacrosse",
        url: "https://boltslax.leagueapps.com/events/4823577-2026-summer-tryout",
      },
      {
        title: "U.S. National Team ID Clinic",
        age: "Boys U15",
        date: date2,
        team: "USA Lacrosse",
        url: "https://account.usalacrosse.com/event/view/44a42f62-441e-476a-9c8d-7a079fb79cef?_ga=2.105086983.542787578.1763389973-724434079.1755528701&_gac=1.81091941.1762266540.Cj0KCQiA5abIBhCaARIsAM3-zFW3FvSskWrDNYjKa_qWJAA9SeuUKK_bJi3RNykf9-z4FmwEkv8JZdMaAu7uEALw_wcB",
      },
      {
        title: "Chaos 2026 Supplemental Summer Tryouts",
        age: "Boys HS + Youth",
        date: date3,
        team: "Cosmo Chaos Lacrosse",
        url: "https://www.cosmolax.com/chaosassessmentday",
      },
      {
        title: "CSBOXLA Boys 5th/6th Grade",
        age: "Boys 5th-6th Grade",
        date: date4,
        team: "CSBOXLA",
        url: "https://www.csboxla.com/program/winter-2-session/29116",
      },
      {
        title: "CSBOXLA Girls 5th-12th Grade",
        age: "Girls 5th-12th Grade",
        date: date4,
        team: "CSBOXLA",
        url: "https://www.csboxla.com/program/winter-2-session/29116",
      },
      {
        title: "CSBOXLA Co-ed 3rd/4th Grade",
        age: "Boys + Girls Co-ed 3rd-4th Grade",
        date: date5,
        team: "CSBOXLA",
        url: "https://www.csboxla.com/program/winter-2-session/29116",
      },
      {
        title: "CSBOXLA Boys 7th/8th Grade",
        age: "Boys 7th-8th Grade",
        date: date5,
        team: "CSBOXLA",
        url: "https://www.csboxla.com/program/winter-2-session/29116",
      },
      {
        title: "CSBOXLA Mens 18+ League",
        age: "Mens 18+",
        date: date6,
        team: "CSBOXLA",
        url: "https://www.csboxla.com/program/mens-league-18/29736",
      },
      {
        title: "CSBOXLA Womens 18+ League",
        age: "Womens 18+",
        date: date6,
        team: "CSBOXLA",
        url: "https://www.csboxla.com/program/womens-18-league/29737",
      },
    ],
  });
  console.log("Created event:", event);

  // Fetch all users with their posts
  const allEvents = await prisma.event.findMany();
  console.log("All events:", JSON.stringify(allEvents, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
