let bulmaMsgClasses = {
  isDark: "is-dark",
  isLink: "is-link",
  isPrimary: "is-primary",
  isInfo: "is-info",
  isSuccess: "is-success",
  isWarning: "is-warning",
  isDanger: "is-danger",
  isSmall: "is-small",
  isMedium: "is-medium",
  isLarge: "is-large",
};

function Message(props) {
  let msgClasses = Object.keys(props)
    .filter((p) => bulmaMsgClasses[p])
    .map((p) => bulmaMsgClasses[p])
    .join(" ");
  return (
    <article class={`message ${msgClasses}`}>
      <div class="message-header">
        <p>{props.title}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">{props.children}</div>
    </article>
  );
}

export default Message;
