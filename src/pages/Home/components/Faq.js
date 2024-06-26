import { FaqCard } from "./FaqCard"

export const Faq = () => {
  
  const faqs = [
    {question:"Why should I use CodeBook?",answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex tempora numquam eaque nihil, reiciendis laborum culpa fugiat id. Hic, qui dolorum iste earum impedit deleniti ex in ducimus repudiandae."},
    {question: "Can I access my eBook on mobile?",answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, rem. Nulla excepturi earum aliquam mollitia enim ratione amet asperiores quod."},
    {question:"Do you offer refunds?",answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, possimus."},
    {question: "Do you support international payments?",answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, consectetur"}
    ]

  return (
    <section className="border dark:border-gray-700 rounded py-7 px-7 mb-10">
      <h1 className="text-center font-semibold text-black text-2xl underline underline-offset-8 dark:text-white">Question in mind?</h1>
      <div className="mt-4">
        { faqs && faqs.map((faq) => (
          < FaqCard faq={faq} />
        ))}
      </div>
    </section>
  )
}
