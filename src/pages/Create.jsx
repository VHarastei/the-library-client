import React from 'react';
import { useForm } from 'react-hook-form';

export const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const book = data;
    book.rating = +data.rating;
    book.date = +data.date;
    book.views = 0;
    book.img = null;
    console.log(book);
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold text-blue-500 text-center my-4">Add book</h1>
      <div className="bg-white rounded-lg p-4 max-w-md m-auto mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <div className="text-xl font-semibold text-gray-500">Name:</div>
            <FormInput register={register('name', { required: true })} placeholder="eg. Duna" />
            {errors.name && <div className="text-red-500">This field is required</div>}
          </div>
          <div className="mb-2">
            <div className="text-xl font-semibold text-gray-500">Author:</div>
            <FormInput
              register={register('author', { required: true })}
              placeholder="eg. Frank Herbert"
            />
            {errors.author && <div className="text-red-500">This field is required</div>}
          </div>
          <div className="mb-2">
            <div className="text-xl font-semibold text-gray-500">Rating:</div>
            <FormInput
              type="number"
              register={register('rating', { required: true, max: 5, min: 0 })}
            />
            {errors.rating?.type === 'required' && (
              <div className="text-red-500">This field is required</div>
            )}
            {(errors.rating?.type === 'max' || errors.rating?.type === 'min') && (
              <div className="text-red-500">Enter value between 0 and 5</div>
            )}
          </div>
          <div className="mb-2">
            <div className="text-xl font-semibold text-gray-500">Date of Writing:</div>
            <FormInput
              register={register('date', { required: true, min: '0', max: '2021' })}
              placeholder="eg. 1954"
              type="number"
            />
            {errors.date?.type === 'required' && (
              <div className="text-red-500">This field is required</div>
            )}
            {(errors.date?.type === 'max' || errors.date?.type === 'min') && (
              <div className="text-red-500">Enter value between 0 and 2021</div>
            )}
          </div>
          <div className="mb-2">
            <div className="text-xl font-semibold text-gray-500">Link on Amazon:</div>
            <FormInput register={register('buyLink', { required: true })} />
            {errors.buyLink && <div className="text-red-500">This field is required</div>}
          </div>
          <input
            className="mt-2 py-2 text-lg font-medium w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            type="submit"
            value="Add"
          />
        </form>
      </div>
    </div>
  );
};

const FormInput = (props) => (
  <input
    {...props}
    {...props.register}
    className="py-1 px-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ring-gray-200 ring-1 w-full"
  />
);
