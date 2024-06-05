const blogPosts = [
  {
    title: "Finding the Perfect Home: Tips and Tricks",
    date: "June 1, 2024",
    excerpt:
      "Discover essential tips and tricks for finding your dream home in today's competitive market. Finding your dream home in today's",
    image:
      "https://thumbs.dreamstime.com/b/saving-money-to-buy-new-house-high-rent-price-home-insurance-saving-money-to-buy-new-house-high-rent-price-home-insurance-112833838.jpg",
  },
  {
    title: "Real Estate Market Trends for 2024",
    date: "May 20, 2024",
    excerpt:
      "Stay updated with the latest trends in the real estate market for 2024. From pricing shifts to new developments.Real estate market for 2024",
    image:
      "https://thumbs.dreamstime.com/b/discussion-real-estate-agent-office-49310143.jpg",
  },
  {
    title: "How to Prepare Your Home for Sale",
    date: "May 15, 2024",
    excerpt:
      "Learn how to effectively prepare your home for sale and attract potential buyers with these simple steps. Real estate market for 2024",
    image:
      "https://plecto-website-2020.s3.amazonaws.com/images/Real_Estate_Data_Anal.2e16d0ba.fill-1200x625.format-jpeg.jpg",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
