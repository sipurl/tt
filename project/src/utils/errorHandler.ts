import toast from 'react-hot-toast';

export const handleError = (error: unknown) => {
  console.error('Error:', error);
  
  if (error instanceof Error) {
    toast.error(error.message);
  } else {
    toast.error('An unexpected error occurred. Please try again.');
  }
};

export const showSuccess = (message: string) => {
  toast.success(message);
};

export const showInfo = (message: string) => {
  toast.custom((t) => (
    <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} bg-black text-white px-6 py-4 shadow-lg rounded-lg`}>
      <p>{message}</p>
    </div>
  ));
};