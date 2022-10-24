// import Link from "../models/Link";

export const getLinks = async (req, res) => await res.json({ message: [] });

export const createLink = async (req, res) =>
  await res.json({ message: "Link saved!!" });

export const getLink = async (req, res) =>
  await res.json({ title: "texto cualquiera relacionado con el id" });

export const updateLink = async (req, res) =>
  await res.json({ message: "Note updated" });

export const deleteLink = async (req, res) =>
  await res.json({ message: "Note deleted" });
