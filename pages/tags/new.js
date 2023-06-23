import TagForm from '../../components/tag/TagForm';
import { useAuth } from '../../utils/context/authContext';

const NewTag = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Register New Tag</h2>
      <TagForm user={user} />
    </div>
  );
};

export default NewTag;
