import { FC, JSX, memo } from 'react';

type Props = {
  borderColor: string;
  bgColor: string;
  label: string;
} & JSX.IntrinsicElements['button'];

const BaseButton: FC<Props> = memo(function BaseButton({
  borderColor,
  bgColor,
  label,
  ...props
}: Props) {
  return (
    <>
      <button
        className={`px-8 py-2 ${borderColor} ${bgColor} rounded-xl text-white`}
        {...props}
      >
        {label}
      </button>
    </>
  );
});

export default BaseButton;
