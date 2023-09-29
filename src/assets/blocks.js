const blocksData = {
  "blocks": [
    {
      "token": "PERSON_NAME",
      "id": 1,
      "type": "text",
      "props": {
        "title": "Enter Your Name",
        "required": true,
        "placeholder": "Deepshi Sharma"
      }
    }, {
      "token": "IS_PERSON_MINOR",
      "id": 2,
      "type": "checkbox",
      "props": {
        "title": "Is the current person minor",
        "default": false,
      }
    }, {
      "token": "PERSON_DOB",
      "id": 3,
      "type": "date",
      "props": {
        "title": "Enter Your DOB",
        "required": "IS_PERSON_MINOR",
        "placeholder": "2023-10-14"
      }
    },
  ]
}
export default blocksData