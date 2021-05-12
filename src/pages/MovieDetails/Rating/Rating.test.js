import { shallow } from 'enzyme';
import Rating, { getRatingColor, INVALID_RATING } from './Rating';


describe('<Rating>', () => {
  it('should render without crashing', () => {
    shallow(<Rating>{3}</Rating>);
  });

  describe('[getRatingColor]', () => {
    it.each`
      rating  | color
      ${1}    | ${'#f65261'}
      ${2.3}  | ${'#f65261'}
      ${3.3}  | ${'#f65261'}
      ${4}    | ${'#ffa500'}
      ${5.9}  | ${'#ffa500'}
      ${6}    | ${'#fdff00'}
      ${8}    | ${'#7bb256'}
      ${9.9}  | ${'#7bb256'}
      ${10}   | ${'#7bb256'}
    `('rating $rating should return color code: $color',
      ({ rating, color }) => {
        expect(getRatingColor(rating)).toEqual(color);
    });    
  })
  describe('Invalid Rating', () => {
    it(`should render '${INVALID_RATING}' without passing rating`, () => {
      const wrapper = shallow(<Rating></Rating>);
      expect(wrapper.text()).toEqual('N/A');
    });
    it(`should render '${INVALID_RATING}' with negative rating`, () => {
      const wrapper = shallow(<Rating>{-1}</Rating>);
      expect(wrapper.text()).toEqual('N/A');
    });
    it(`should render '${INVALID_RATING}' with greater than 10 rating`, () => {
      const wrapper = shallow(<Rating>{11}</Rating>);
      expect(wrapper.text()).toEqual('N/A');
    });
    it(`should render '${INVALID_RATING}' with null`, () => {
      const wrapper = shallow(<Rating>{null}</Rating>);
      expect(wrapper.text()).toEqual('N/A');
    });
    it('should render 0 when the rating is 0', () => {
      const wrapper = shallow(<Rating>{0}</Rating>);
      expect(wrapper.text()).toEqual('0');
    });
  })
});
