import classNames from 'classnames'

type RatingProps = {
  rating: number
}

export const Rating = ({rating}: RatingProps) => (
  <div>
    <div className={classNames("w-10 h-10 bg-slate-900 border-solid border-4 rounded-full text-white flex items-center justify-center shadow-box-rating font-bold text-sm z-10",{
            'border-green-500' : rating >= 7,
            'border-yellow-500': rating >= 4 && rating < 7,
            'border-red-500': rating >= 0 && rating < 4

          })}>{rating}</div>
  </div>
)

export default Rating