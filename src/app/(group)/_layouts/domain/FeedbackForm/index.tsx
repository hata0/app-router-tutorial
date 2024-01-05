export const FeedbackForm = ({ label }: { label: string }) => {
  return (
    <form>
      <label>
        <span className="block">{label}</span>
        <input type="text" placeholder="Your feedback" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
