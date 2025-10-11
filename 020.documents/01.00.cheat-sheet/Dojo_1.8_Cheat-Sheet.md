<a name="topage"></a>

# 🧠 Dojo 1.8 Cheat Sheet

---

## 🏗️ Foundation (`dojo/_base/lang`)
```js
lang.clone(src)
lang.exists(name, obj)
lang.mixin(dest, sources)
lang.getObject(name, create, context)
lang.setObject(name, value, context)
lang.replace(tmpl, map, pattern)
lang.hitch(scope, method)
lang.delegate(obj, props)
lang.extend(ctor, props)
lang.trim(str)
```

---

## 📊 Arrays (`dojo/_base/array`)
```js
array.indexOf(arr, value, fromIndex, findLast)
array.lastIndexOf(arr, value, fromIndex)
array.forEach(arr, callback, thisObject)
array.filter(arr, callback, thisObject)
array.map(arr, callback, thisObject, Ctr)
array.some(arr, callback, thisObject)
array.every(arr, callback, thisObject)
```

---

## 📅 Dates (`dojo/date`)
```js
date.getDaysInMonth(dateObject)
date.getTimezoneName(dateObject)
date.isLeapYear(dateObject)
date.compare(date1, date2, portion)
date.difference(date1, date2, interval)
```

---

## ⏳ Deferreds (`dojo/Deferred`)
```js
var d = new Deferred();
d.promise
d.isResolved()
d.isFulfilled()
d.progress(update, strict)
d.then(callback, errback, progback)
d.isRejected()
d.isCanceled()
d.resolve(value, strict)
d.cancel(reason, strict)
d.reject(error, strict)
```

---

## ✂️ String Manipulation (`dojo/string`)
```js
string.pad(text, size, ch, end)
string.substitute(template, map, transform, thisObj)
string.rep(str, num)
string.trim(str)
```

---

## 🧬 Properties (`dojo/Stateful`)
```js
.get(name)
.set(name, value)
.watch(name, callback)
_fooGetter: function() {...}
_fooSetter: function(value) {...}
```

---

## 🔌 Loader Plugins
```js
dojo/domReady!
```

---

## 📣 Topics / Publish / Subscribe (`dojo/topic`)
```js
topic.publish(topic, event)
topic.subscribe(event, listener)
```

---

## 🧾 JSON (`dojo/json`)
```js
JSON.parse(str, strict)
JSON.stringify(value, replacer, spacer)
```

---

## 🧱 DOM API (`dojo/dom`)
```js
dom.query(selector, [context])
dom.byId(id, doc)
dom.isDescendant(node, ancestor)
dom.setSelectable(node, selectable)
```

---

## 🏗️ DOM Construction (`dojo/dom-construct`)
```js
domConstruct.destroy(node)
domConstruct.place(node, refNode, [pos])
domConstruct.create(tag, [attrs], [refNode], [pos])
domConstruct.toDom(frag, [doc])
domConstruct.empty(node)
```

---

## 🎨 DOM Class API (`dojo/dom-class`)
```js
domClass.add(node, classStr)
domClass.contains(node, classStr)
domClass.toggle(node, classStr, condition)
domClass.replace(node, addClassStr, removeClassStr)
domClass.remove(node, classStr)
```

---

## 📝 Form Processing (`dojo/dom-form`)
```js
domForm.fieldToObject(inputNode)
domForm.toJson(inputNode)
domForm.toObject(inputNode)
domForm.toQuery(inputNode)
```

---

## 🧾 DOM Properties (`dojo/dom-prop`)
```js
domProp.get(node, name)
domProp.set(node, name, value)
```

---

## 🎨 DOM Style API (`dojo/dom-style`)
```js
domStyle.get(node, name)
domStyle.getComputedStyle(node)
domStyle.set(node, name, value)
domStyle.toPixelValue(node, value)
```

---

## 🗃️ Data & Stores (`dojo/store`)
```js
store.get(id)
store.query(query, options)
store.getMetadata(object)
store.getIdentity(object)
store.queryEngine(query, options)
store.getChildren(object, options)
store.remove(id)
store.put(object, options)
store.add(object, options)
```

---

## 🧠 Aspect-Oriented Programming (`dojo/aspect`)
```js
aspect.after(target, methodName, advisingFunction, receiveArguments)
aspect.before(target, methodName, advisingFunction)
aspect.around(target, methodName, advisingFactory)
```

---

## 🧩 Events (`dojo/on`)
```js
on(target, type, listener, dontFix)
emit(target, type, event)
once(target, type, listener, dontFix)
pausable(target, type, listener, dontFix)
selector(selector, eventType, children)
```

---

## 🧬 NodeList (`dojo/NodeList`)
```js
.on(eventName, listener)
.concat(item)
.at(index)
.end()
.slice(begin, end)
.pop()
.shift()
.push(item)
.unshift()
.some(callback, thisObj)
.splice(index, howmany, item)
.every(callback, thisObj)
.forEach(callback, thisObj)
.lastIndexOf(value, fromIndex)
```

---

## 🧾 HTML Manipulation (`dojo/NodeList-manipulate`)
```js
.innerHTML([value])
.text([value])
.val([value])
.html(value)
```

---

## 🗂️ Data Abstraction (`dojo/NodeList-data`)
```js
.data("key", "value")
.removeData("key")
```

---

## 🧱 DOM Manipulation (`dojo/NodeList-dom`)
```js
.addClass(className)
.removeClass(className)
.toggleClass(className, condition)
.place(queryOrNode, position)
.coords()
.position()
.orphan(filter)
.empty()
.adopt(queryOrListOrNode, position)
.addContent(content, position)
```

---

## 🧭 DOM Traversal (`dojo/NodeList-traverse`)
```js
.children([query])
.closest([query], root)
.prevAll([query])
.parent([query])
.andSelf()
.parents([query])
.first()
.siblings([query])
.last()
.next([query])
.even()
.nextAll([query])
.odd()
.prev([query])
```

---

## 🌐 Requests (`dojo/request`)
```js
request.request(url, options)
request.get(url, opts)
request.put(url, opts)
request.post(url, opts)
```

---

## 🔍 Query String Processing (`dojo/io-query`)
```js
ioQuery.objectToQuery(query)
ioQuery.queryToObject(query)
```

---

<p align="right">(<a href="#topage">back to top</a>)</p>
<br/>
<br/>

