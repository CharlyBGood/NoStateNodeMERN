import Link from "../models/Link";

export const getLinks = async (req, res) => {
  const links = await Link.find();
  res.json(links);
};

export const createLink = async (req, res) => {
  const { title, link, date, author } = req.body;
  const newLink = new Link({
    title: title,
    link: link,
    date: date,
    author: author,
  });
  await newLink.save();
  res.json({ message: "Link saved!!" });
};

export const getLink = async (req, res) => {
  const link = await Link.findById(req.params.id);
  res.json(link);
};

export const updateLink = async (req, res) => {
  const { title, link } = req.body;
  await Link.findByIdAndUpdate(req.params.id, {
    title, 
    link,
  })
  res.json({ message: "Note updated" })
};

export const deleteLink = async (req, res) => {
  await Link.findByIdAndDelete(req.params.id);
  res.json({ message: "Note deleted" });
};
