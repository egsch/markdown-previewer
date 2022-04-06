marked.setOptions({
  breaks: true });

const initText = "# Markdown Previewer \n \
## A more beautiful update \n \
This *amazing* **[Markdown](https://en.wikipedia.org/wiki/Markdown) previewer** interprets markdown and shows you a preview. For example, `this is code`, and \n\
```javascript\n \
\\\\This is a multi-line code block. \n \
function example (){ \n \
     return () \n \
} \n \
``` \n \
\and ~~this is using strikethrough.~~ \n \
## More tools \n \
* Unordered list with asterisks \n \
- minuses \n \
+ or plusses \n \
>beautiful blockquotes work too. \n \n \n \
and images: \n \n \
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/175px-Markdown-mark.svg.png)";
class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: initText };

    this.update = this.update.bind(this);
  }
  update(event) {
    this.setState({
      text: event.target.value });

  }
  present() {
    return {
      __html: marked(this.state.text) };

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "flex-contain" }, /*#__PURE__*/
      React.createElement("textarea", { id: "editor", onInput: this.update }, initText), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.present() })));



  }}




ReactDOM.render( /*#__PURE__*/React.createElement(Previewer, null), document.getElementById('roots'));
