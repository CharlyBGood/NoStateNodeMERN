import Link from "../models/Link";
import { getPagination } from "../libs/getPagination";

export const findAllLinks = async (req, res) => {
  try {
    const { size, page, title } = req.query;

    const condition = title
      ? {
          title: { $regex: new RegExp(title), $options: "i" },
        }
      : {};

    const { limit, offset } = getPagination(page, size);

    const data = await Link.paginate(condition, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      links: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong retrieving the tasks",
    });
  }
};

export const createLink = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  try {
    const newLink = new Link({ title: req.body.title, link: req.body.link });
    const linkSaved = await newLink.save();
    res.json(linkSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something went wrong creating a task",
    });
  }
};

export const findOneLink = async (req, res) => {
  const { id } = req.params;
  try {
    const link = await Link.findById(id);
    if (!link)
      return res
        .status(400)
        .json({ message: `Link with id ${id} does not exists!` });

    res.json(link);
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error retrieving link with id ${id}`,
    });
  }
};

export const deleteLink = async (req, res) => {
  const { id } = req.params;
  try {
    await Link.findByIdAndDelete(id);
    res.json({
      message: "Link was deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || `Error deleting link with id ${id}`,
    });
  }
};

export const updateLink = async (req, res) => {
  await Link.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  });
  res.json({
    message: "Link was updated!",
  });
};
