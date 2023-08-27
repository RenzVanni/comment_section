# Comment Section

This is a simple comment section where in you can view and delete replies. This comment section was also responsive.

- to create reply this is the script.

```javascript
const onCreateReply = (val) => {
  if (visible === val) {
    setVisible(null);
  } else {
    setVisible(val);
  }
};
```

- to edit reply this is the script.

```javascript
const onEditReply = (val) => {
  if (edit === val) {
    setEdit(null);
  } else {
    setEdit(val);
  }
};
```

- this code is use to view the confirmation to delete

```javascript
const confirmDeleteReply = () => {
  setDeleteReply(!deleteReply);
};
```

- to finally delete the reply this is the code

```javascript
useEffect(() => {
  setRepple((prev) => {
    return prev.filter((reply) => reply.id !== delRep);
  });
  console.log(repple, "rep");
}, [delRep]);
```

the _delRep_ comes from the parent component

```javascript
const deleteConfirmed = () => {
  setOnDelete((prev) => !prev);
  setDelRep((prev) => (prev = replyVal));
};
```
