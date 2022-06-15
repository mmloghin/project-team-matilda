import 'twin.macro';

const Two = ({ hasHover }) => (
  <div css={[tw`border border-solid border-black`, hasHover && tw`hover:border-blue-300`]}>Two</div>
);