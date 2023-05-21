

const FAQsSection = () => {

    const faqs = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, PayPal, and bank transfers.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location. Generally, it takes 3-7 business days for domestic orders and 7-14 business days for international orders.',
    },
    {
      question: 'Do you offer returns or exchanges?',
      answer: 'Yes, we have a hassle-free return and exchange policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.',
    },
    {
      question: 'Are the toy cars safe for children?',
      answer: 'Yes, all our toy cars undergo rigorous safety testing to ensure they meet the highest safety standards. However, adult supervision is recommended for younger children.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes, once your order is shipped, we will provide you with a tracking number. You can use that number to track the status of your order.',
    },
    // Add more FAQs as needed
  ];

    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-wrap -mx-4">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full md:w-1/2 px-4 mb-8">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default FAQsSection;