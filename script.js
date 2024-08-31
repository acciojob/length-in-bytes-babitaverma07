function byteSize(str) {
  // Create a new Blob object with the given string
  const blob = new Blob([str]);

  // Return the size of the Blob object, which represents the size of the string in bytes
  return blob.size;
}