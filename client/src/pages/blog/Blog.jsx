import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col gap-3 mt-10">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            Access tokens and refresh tokens are two types of tokens used in
            OAuth 2.0, an open standard for authorization. <br /> Access tokens
            are typically short-lived, expiring after a few hours or days. This
            is to protect the user's privacy and security. If an access token is
            compromised, it can only be used for a limited period of time.{" "}
            <br />
            Refresh tokens are longer-lived tokens that can be used to obtain
            new access tokens. This is useful for applications that need to
            access protected resources on behalf of the user over a long period
            of time. For example, a weather app might use a refresh token to
            access the user's location data every few minutes. Refresh tokens
            should be stored securely on the client-side. This can be done in a
            variety of ways, such as in a browser's local storage or in a
            database.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          Compare SQL and NoSQL database
        </div>
        <div className="collapse-content">
          <p>
            SQL (Structured Query Language) is the standard language for dealing
            with relational databases. SQL database or relational database is a
            collection of highly structured tables. Each row reflects a data
            entity, and every column defines a specific information field.
            Relational databases are built using a structured query language
            (SQL) to create, store, update, and retrieve data. Therefore, SQL is
            the underlying programming language for all relational database
            management systems (RDBMS) such as MySQL, Oracle, and Sybase, among
            others. <br /> NoSQL databases are non-tabular databases and store
            data differently than relational tables It avoids joins and is easy
            to scale. The major purpose of using a NoSQL database is for
            distributed data stores with humongous data storage needs.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          What is express & express js
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a popular choice for building web applications because
            it is easy to learn and use. It provides a simple API for routing
            requests, handling data, and rendering templates. Express.js can be
            used to build a wide variety of web applications, including simple
            websites, complex web applications, and APIs.
            <br />
            Next.js is a newer framework that is designed to make it easy to
            build React applications. It provides a number of features that make
            React applications faster, more SEO-friendly, and easier to
            maintain. Next.js can be used to build static websites,
            server-rendered websites, and hybrid websites.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          What is mongoDB aggregate and how does it work
        </div>
        <div className="collapse-content">
          <p>
            MongoDB aggregation is a process of transforming data from a
            collection into a more meaningful form. It is used to perform
            operations such as grouping, filtering, and calculating on data.
            MongoDB aggregation is based on the concept of aggregation
            pipelines. An aggregation pipeline is a sequence of stages that are
            applied to the data in a collection. Each stage performs a specific
            operation on the data, and the output of one stage is passed to the
            next stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
