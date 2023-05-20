import AppLayout from "../../layouts/AppLayout";

const drugs = [
  {
    name: "Aspirin",
    imageURL:
      "https://media.istockphoto.com/id/185235418/photo/prescription-medication-medicine-pill-tablets.jpg?b=1&s=170667a&w=0&k=20&c=ZXQtHk-OhoYtJr5ou1EvKiahY2EZOm7-QgxAdkQwjUo=",
  },
  {
    name: "Insulin",
    imageURL:
      "https://mc-42b990dd-5dae-4647-b81e-424724-cdn-endpoint.azureedge.net/-/media/i/insulin.jpeg?rev=1352f8f7fe634d60a301cdf94de40e7b&h=300&w=450&la=en&hash=D57E7522F051C8E7168D8FFEC3315C8F",
  },
  {
    name: "Antibiotics",
    imageURL: "https://cdn-prod.medicalnewstoday.com/content/images/articles/301/301766/bottle-of-aspirin.jpg",
  },
];

export default function Dashboard() {
  return (
    <AppLayout>
      <h1 className="text-2xl">Drugs Catalogue</h1>

      <section className="mt-4 w-full grid grid-cols-4 gap-4 ">
        {drugs.map((drug, idx) => (
          <article className="flex flex-col rounded-md shadow" key={idx}>
            <div className="flex-1 h-40">
              <img className="w-full h-full object-fit" src={drug.imageURL} alt="" />
            </div>

            <div className="px-4 py-2">
              <h2 className="text-2xl font-semibold">{drug.name}</h2>
            </div>
          </article>
        ))}
      </section>
    </AppLayout>
  );
}
