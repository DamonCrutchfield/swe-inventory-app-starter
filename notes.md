# Code Review II


## Roses

* Problem Solving Together, Brainstorming, Thinking Outside the Box (James)
* Social Problem Solving, working with other groups (Abdi)
* Communication has been great (Nate)
* Being Resourceful (Damon)

## Thorns

* Merge conflicts, git difficulties (James + Abdi + Nate)
* Wanting to accomplish more features (Damon)

## Deployment

#### Redirect to items list after POST

* Consider updating POST route:
```js
app.post('/new-item', async (req, res) => {
    const newitem = await Item.create(req.body);
    const founditem = await Item.findByPk(newitem.id);
    if(founditem) {
        res.render('item', {item : founditem})
    } else {
        console.log("NO item created")
    }
})

```

* Consider adding  Express validations for POST ($ breaks price for example)
* Item Category could be an ENUM ('Clothing', 'Electronics', 'Jewels')

#### Remove order from Delete

* Move button to item.handlebars
`  <button id="delete-button" data-id="{{id}}">Delete {{name}}</button>  <button id="delete-button" data-id="{{id}}">Delete {{name}}</button>`

* Consider changing script.js
```js
deleteButton.addEventListener('click', async (e) => {
    await fetch(`/remove-item/${deleteButton.dataset.id}`, {method: 'DELETE'})
    window.location.href = '/items' //redirects to item page
})

```
* And changing DELETE Route
```js
app.delete('/remove-item/:id', async (req, res) => {
    await Item.destroy({where: { id: req.params.id }})
    let items = await Item.findAll();
    res.render('items', {items});
});

```


* Adding CSS :)
* Bootstrap!
* create a `row` class
* items can be `class="col-md-4"` 

## Next Steps

* Fix POST
* Fix Delete
* Add CSS :)
* Server Side Validations (extra credit)

