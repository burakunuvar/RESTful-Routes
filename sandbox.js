const defaultPosts = [{
    title: "AWS Foundational Services Part1 : Amazon EC2 ",
    image: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/images/overview_getting_started.png",
    body: "Let's get started with Amazon Elastic Compute Cloud (Amazon EC2) by launching, connecting to, and using a Linux instance. An instance is a virtual server in the AWS cloud. With Amazon EC2, you can set up and configure the operating system and applications that run on your instance.",
  },
  {
    title: "AWS Foundational Services Part2 : Amazon S3 ",
    image: "https://cdn-images-1.medium.com/max/1600/1*PZryXkcXoVj99unK-XNqUA.png",
    body: "Amazon S3 has a simple web services interface that you can use to store and retrieve any amount of data, at any time, from anywhere on the web.",
  },
  {
    title: "AWS Foundational Services Part3 : AWS CLI and IAM",
    image: "https://i.ytimg.com/vi/W8IyScUGuGI/hqdefault.jpg",
    body: "The AWS Command Line Interface (AWS CLI) is a unified tool that provides a consistent interface for interacting with all parts of AWS. AWS CLI commands for different services are covered in the accompanying user guide, including descriptions, syntax, and usage examples.",
  },
];

Post.insertMany(defaultPosts, function(err, insertedPosts) {
  if (!err) {
    console.log("default list of movies insterted successfully");
    console.log(insertedPosts);
  } else {
    console.log(err);
  }
});


<form class="ui form" action="/blogs/<%=foundpost._id%>?_method=DELETE" method="POST">
  <a href="/blogs" role="button"> back to blogs </a>
  <a href="/blogs/<%=foundpost._id%>/edit" role="button" class="ui secondary button"> edit </a>
  <button class="ui button" type="submit">Delete</button>
</form>
