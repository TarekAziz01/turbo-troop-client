

const Blogs = () => {
  document.title = "Blog";
    return (
      <div className=" p-7">
        <div className="mb-7">
          <p className="mb-2">
            Q: What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </p>
          <p>
            Ans: Access tokens are credentials for authorization, while refresh
            tokens obtain new access tokens. Store them securely on the
            client-side, using techniques such as HTTP-only cookies or secure
            storage mechanisms like encrypted local storage. This prevents
            unauthorized access and mitigates security risks like cross-site
            scripting (XSS) attacks. Adhere to best practices and framework
            guidelines for proper token management.
          </p>
        </div>
        <div className="mb-7">
          <p className="mb-2">Q: Compare SQL and NoSQL databases?</p>
          <p>
            Ans: SQL databases are structured, enforce fixed schemas, support
            complex queries, and provide strong data integrity. NoSQL databases
            are schema-less, highly scalable, optimized for performance, and
            offer flexible data models. SQL databases excel in applications with
            structured data and strong data consistency requirements. NoSQL
            databases are preferred for large-scale, high-traffic applications
            with varied or unstructured data. The choice depends on the specific
            use case, scalability needs, data structure, and performance
            requirements. Some popular SQL databases include MySQL and
            PostgreSQL, while MongoDB and Cassandra are prominent NoSQL options.
          </p>
        </div>
        <div className="mb-7">
          <p className="mb-2">Q: What is express js? What is Nest JS?</p>
          <p>
            Ans: Express.js is a lightweight and fast web application framework
            for Node.js. It provides a range of features, including routing,
            middleware support, and simplified handling of HTTP requests and
            responses. With its minimalistic design and extensive ecosystem,
            Express.js is a popular choice for creating web applications and
            APIs, offering flexibility and ease of use.
            <br></br>
            Nest.js, built on top of Express.js, is a progressive and
            opinionated framework for server-side applications. It adds
            structure and scalability to Node.js development by incorporating
            features inspired by Angular, such as dependency injection,
            decorators, and modules. Nest.js promotes best practices, enhances
            productivity, and offers a powerful CLI for building efficient and
            maintainable applications, making it suitable for RESTful APIs,
            microservices, and more.
          </p>
        </div>
        <div className="mb-7">
          <p className="mb-2">
            Q: What is MongoDB aggregate and how does it work?
          </p>
          <p>
            Ans: In MongoDB, the aggregate framework is a versatile feature used
            for advanced data processing. It allows for complex operations like
            filtering, grouping, sorting, and calculations on collections of
            documents. The framework works through a pipeline approach, where
            multiple stages are chained together to transform the data. Each
            stage performs a specific operation, such as filtering with $match,
            grouping with $group, and sorting with $sort. The results of one
            stage are passed as input to the next stage. With the aggregate
            framework, developers can construct powerful data pipelines to
            perform sophisticated analysis and transformations, making it a
            valuable tool for data aggregation and processing in MongoDB.
          </p>
        </div>
      </div>
    );
};

export default Blogs;