import { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const israeliCities = [
  'Tel Aviv',
  'Jerusalem',
  'Haifa',
  'Beer Sheva',
  'Eilat',
  'Netanya',
  'Herzliya',
  'Ramat Gan',
  'Ashdod',
  'Other'
];

const UserDataForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    city: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.age || formData.age < 13 || formData.age > 120) {
      newErrors.age = 'Please enter a valid age between 13 and 120';
    }
    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }
    if (!formData.city) {
      newErrors.city = 'Please select your city';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-xl font-bold">
        Help us personalize your experience
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Age</label>
            <Input
              type="number"
              value={formData.age}
              onChange={(e) => handleChange('age', e.target.value)}
              className={errors.age ? 'border-red-500' : ''}
            />
            {errors.age && (
              <p className="text-sm text-red-500">{errors.age}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Gender</label>
            <Select 
              value={formData.gender}
              onValueChange={(value) => handleChange('gender', value)}
            >
              <SelectTrigger className={errors.gender ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className="text-sm text-red-500">{errors.gender}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">City</label>
            <Select
              value={formData.city}
              onValueChange={(value) => handleChange('city', value)}
            >
              <SelectTrigger className={errors.city ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                {israeliCities.map((city) => (
                  <SelectItem key={city} value={city.toLowerCase()}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.city && (
              <p className="text-sm text-red-500">{errors.city}</p>
            )}
          </div>
        </form>
      </CardContent>

      <CardFooter>
        <Button 
          onClick={handleSubmit}
          className="w-full"
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserDataForm;