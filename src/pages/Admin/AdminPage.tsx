import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/index";
import {
  fetchUsers,
  deleteUserById,
} from "../../store/slices/admin/user/usersThunks";
import { TableUsers } from "../../components/admin/TableUsers";
import { useEffect } from "react";

const AdminPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <TableUsers users={users} onDelete={(id) => dispatch(deleteUserById(id))} />
  );
};

export default AdminPage;